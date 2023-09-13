import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Aluno } from "src/app/models/aluno";
import { AlunoService } from "src/app/services/aluno.service";

@Component({
  selector: "app-aluno-create",
  templateUrl: "./aluno-create.component.html",
  styleUrls: ["./aluno-create.component.scss"],
})
export class AlunoCrudComponent {
  aluno: Aluno = new Aluno();
  form: FormGroup;
  operacao: string = "";
  constructor(
    private service: AlunoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((param: any) => {
      this.operacao = param["operacao"];
      this.form = new FormGroup({
        nome: new FormControl(
          { value: null, disabled: this.operacao == "Deletar" },
          Validators.minLength(3)
        ),
        cpf: new FormControl(
          { value: null, disabled: this.operacao == "Deletar" },
          Validators.required
        ),
        email: new FormControl(
          { value: null, disabled: this.operacao == "Deletar" },
          Validators.email
        ),
        senha: new FormControl(
          { value: null, disabled: this.operacao == "Deletar" },
          Validators.minLength(3)
        ),
      });
      if (param["id"] !== "null") {
        service.findById(param["id"]).subscribe((res: any) => {
          this.aluno = res;

          this.form = new FormGroup({
            nome: new FormControl(
              { value: this.aluno.nome, disabled: this.operacao == "Deletar" },
              Validators.minLength(3)
            ),
            cpf: new FormControl(
              { value: this.aluno.cpf, disabled: this.operacao == "Deletar" },
              Validators.required
            ),
            email: new FormControl(
              { value: this.aluno.email, disabled: this.operacao == "Deletar" },
              Validators.email
            ),
            senha: new FormControl(
              { value: this.aluno.senha, disabled: this.operacao == "Deletar" },
              Validators.minLength(3)
            ),
          });
        });
      }
    });
  }

  create(): void {
    this.service.create(this.aluno).subscribe(
      () => {
        this.toast.success("Aluno cadastrado com sucesso", "Cadastro");
        this.router.navigate(["alunos"]);
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
    this.router.navigate(["/alunos"]);
  }
  // validaCampos(): boolean {
  //   return (
  //     this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
  //   );
  // }
}
