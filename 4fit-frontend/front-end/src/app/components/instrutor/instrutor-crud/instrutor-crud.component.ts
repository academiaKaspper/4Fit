import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { Operacao } from "src/app/enums/operacao-enum";
import { Instrutor } from "src/app/models/instrutor";
import { InstrutorService } from "src/app/services/instrutor.service";
import { NotificationService } from "../../../services/notification.service";

@Component({
  selector: "app-instrutor-crud",
  templateUrl: "./instrutor-crud.component.html",
  styleUrls: ["./instrutor-crud.component.scss"],
})
export class InstrutorCrudComponent {
  instrutor: Instrutor = new Instrutor();
  form: FormGroup;
  operacao: string = "";

  constructor(
    private service: InstrutorService,
    private toast: ToastrService,
    private notification: NotificationService,
    public dialogRef: MatDialogRef<InstrutorCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.instrutor = data.element;
      this.operacao = data.operacao;
    }
    this.form = new FormGroup({
      nome: new FormControl(
        {
          value: this.instrutor?.nome ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.minLength(3)
      ),
      cpf: new FormControl(
        {
          value: this.instrutor?.cpf ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.required
      ),
      email: new FormControl(
        {
          value: this.instrutor?.email ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.email
      ),
      senha: new FormControl(
        {
          value: this.instrutor?.senha ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.minLength(3)
      ),
    });
  }

  create(): void {
    this.service.create(this.instrutor).subscribe(
      () => {
        this.toast.success("Instrutor cadastrado com sucesso", "Cadastro");
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }

  addPerfil(perfil: any): void {
    if (this.instrutor.perfil.includes(perfil)) {
      this.instrutor.perfil.splice(this.instrutor.perfil.indexOf(perfil), 1);
    } else {
      this.instrutor.perfil.push(perfil);
    }
  }
  cancelar() {
    this.dialogRef.close();
  }
  concluir() {
    if (this.operacao == Operacao.Deletar) {
      this.notification
        .enviarNotificacaoConfirmar(
          "Excluir",
          "Tem certeza que deseja excluir esse instrutor?",
          "warn"
        )
        .then((x) => {
          if (x.isConfirmed) {
            return this.deletar();
          }
        });
    } else if (this.operacao == Operacao.Cadastrar) {
      return this.create();
    } else {
      return this.atualizar();
    }
  }
  deletar() {
    this.service.delete(this.instrutor.id).subscribe(
      (res) => {
        debugger;
      },
      (e) => {
        if (e.status == 200) {
          this.dialogRef.close();
          this.notification.enviarNotificacaoToRoute(
            "Tudo certo",
            "Instrutor excluído com sucesso",
            "success",
            "/instrutores"
          );
        } else {
          this.notification.enviarNotificacao(
            "Ops",
            "Falha ao excluir instrutor!",
            "error"
          );
        }
      }
    );
  }
  atualizar() {
    this.service.update(this.form.value).subscribe((res) => {
      console.log(res);
    });
  }
}
