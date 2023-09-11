import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Aluno } from "src/app/models/aluno";
import { AlunoService } from "src/app/services/aluno.service";

@Component({
  selector: "app-aluno-delete",
  templateUrl: "./aluno-delete.component.html",
  styleUrls: ["./aluno-delete.component.scss"],
})
export class AlunoDeleteComponent {
  aluno: Aluno = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfil: [],
    dataCriacao: "",
  };

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

  delete(): void {
    this.service.delete(this.aluno.id).subscribe(
      () => {
        this.toast.success("Técnico deletado com sucesso", "Delete");
        this.router.navigate(["aluno"]);
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
}
