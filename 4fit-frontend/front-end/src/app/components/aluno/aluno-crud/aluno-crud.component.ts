import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { Operacao } from "src/app/enums/operacao-enum";
import { Aluno } from "src/app/models/aluno";
import { AlunoService } from "src/app/services/aluno.service";
import { NotificationService } from "../../../services/notification.service";

@Component({
  selector: "app-aluno-crud",
  templateUrl: "./aluno-crud.component.html",
  styleUrls: ["./aluno-crud.component.scss"],
})
export class AlunoCrudComponent {
  aluno: Aluno = new Aluno();
  form: FormGroup;
  operacao: string = "";

  constructor(
    private service: AlunoService,
    private toast: ToastrService,
    private notification: NotificationService,
    public dialogRef: MatDialogRef<AlunoCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.aluno = data.element;
      this.operacao = data.operacao;
    }
    this.form = new FormGroup({
      nome: new FormControl(
        {
          value: this.aluno?.nome ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.minLength(3)
      ),
      cpf: new FormControl(
        {
          value: this.aluno?.cpf ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.required
      ),
      email: new FormControl(
        {
          value: this.aluno?.email ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.email
      ),
      senha: new FormControl(
        {
          value: this.aluno?.senha ?? null,
          disabled: this.operacao == "Deletar",
        },
        Validators.minLength(3)
      ),
    });
  }

  create(): void {
    this.service.create(this.aluno).subscribe(
      () => {
        this.toast.success("Aluno cadastrado com sucesso", "Cadastro");
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
    if (this.aluno.perfil.includes(perfil)) {
      this.aluno.perfil.splice(this.aluno.perfil.indexOf(perfil), 1);
    } else {
      this.aluno.perfil.push(perfil);
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
          "Tem certeza que deseja excluir esse aluno?",
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
    this.service.delete(this.aluno.id).subscribe(
      (res) => {
        debugger;
      },
      (e) => {
        if (e.status == 200) {
          this.dialogRef.close();
          this.notification.enviarNotificacaoToRoute(
            "Tudo certo",
            "Aluno excluído com sucesso",
            "success",
            "/alunos"
          );
        } else {
          this.notification.enviarNotificacao(
            "Ops",
            "Falha ao excluir aluno!",
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