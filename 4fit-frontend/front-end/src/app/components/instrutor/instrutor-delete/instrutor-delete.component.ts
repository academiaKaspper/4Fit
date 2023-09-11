import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Instrutor } from "src/app/models/instrutor";
import { InstrutorService } from "src/app/services/instrutor.service";

@Component({
  selector: "app-instrutor-delete",
  templateUrl: "./instrutor-delete.component.html",
  styleUrls: ["./instrutor-delete.component.scss"],
})
export class InstrutorDeleteComponent {
  instrutor: Instrutor = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfil: [],
    dataCriacao: "",
  };

  constructor(
    private service: InstrutorService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.instrutor.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.instrutor.id).subscribe((resposta) => {
      resposta.perfil = [];
      this.instrutor = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.instrutor.id).subscribe(
      () => {
        this.toast.success("Instrutor deletado com sucesso", "Delete");
        this.router.navigate(["instrutor"]);
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
