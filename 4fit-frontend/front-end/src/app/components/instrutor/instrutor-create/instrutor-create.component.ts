import { Instrutor } from "./../../../models/instrutor";
import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { InstrutorService } from "src/app/services/instrutor.service";

@Component({
  selector: "app-instrutor-create",
  templateUrl: "./instrutor-create.component.html",
  styleUrls: ["./instrutor-create.component.scss"],
})
export class InstrutorCreateComponent {
  instrutor: Instrutor = new Instrutor();
  operacao: string = "";
  form: FormGroup;

  constructor(
    private service: InstrutorService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
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
    route.params.subscribe((param: any) => {
      this.operacao = param["operacao"];

      if (param["id"] !== "null") {
        service.findById(param["id"]).subscribe((res: any) => {
          this.instrutor = res;

          this.form = new FormGroup({
            nome: new FormControl(
              {
                value: this.instrutor.nome,
                disabled: this.operacao == "Deletar",
              },
              Validators.minLength(3)
            ),
            cpf: new FormControl(
              {
                value: this.instrutor.cpf,
                disabled: this.operacao == "Deletar",
              },
              Validators.required
            ),
            email: new FormControl(
              {
                value: this.instrutor.email,
                disabled: this.operacao == "Deletar",
              },
              Validators.email
            ),
            senha: new FormControl(
              {
                value: this.instrutor.senha,
                disabled: this.operacao == "Deletar",
              },
              Validators.minLength(3)
            ),
          });
        });
      }
    });
  }

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
}
