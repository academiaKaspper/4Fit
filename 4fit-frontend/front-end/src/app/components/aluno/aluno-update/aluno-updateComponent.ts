import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { Aluno } from "src/app/models/aluno";
import { AlunoService } from "src/app/services/aluno.service";

@Component({
  selector: "app-aluno-update",
  templateUrl: "./aluno-update.component.html",
  styleUrls: ["./aluno-update.component.scss"],
})
export class AlunoUpdateComponent implements OnInit {
  aluno: Aluno = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfil: [],
    dataCriacao: "",
  };

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: AlunoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.aluno.id).subscribe((resposta) => {
      resposta.perfil = [];
      this.aluno = resposta;
    });
  }

  update(): void {
    this.service.update(this.aluno).subscribe(
      () => {
        this.toast.success("Aluno atualizado com sucesso", "Update");
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

  validaCampos(): boolean {
    return (
      this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
    );
  }
}
