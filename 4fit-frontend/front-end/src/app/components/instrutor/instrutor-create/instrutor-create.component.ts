import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Instrutor } from "src/app/models/instrutor";
import { InstrutorService } from "src/app/services/instrutor.service";

@Component({
  selector: "app-instrutor-create",
  templateUrl: "./instrutor-create.component.html",
  styleUrls: ["./instrutor-create.component.scss"],
})
export class InstrutorCreateComponent {
  instrutor: Instrutor = {
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
    private service: InstrutorService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.instrutor).subscribe(
      () => {
        this.toast.success("Instrutor cadastrado com sucesso", "Cadastro");
        this.router.navigate(["instrutors"]);
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

  validaCampos(): boolean {
    return (
      this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
    );
  }
}
