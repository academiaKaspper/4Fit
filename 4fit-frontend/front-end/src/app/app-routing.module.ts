import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { AlunoCrudComponent } from "./components/aluno/aluno-crud/aluno-crud.component";
import { AlunoComponent } from "./components/aluno/aluno.component";
import { HomeComponent } from "./components/home/home.component";
import { InstrutorCrudComponent } from "./components/instrutor/instrutor-crud/instrutor-crud.component";
import { InstrutorComponent } from "./components/instrutor/instrutor.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    canActivate: [AuthGuard],
    component: NavComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "alunos", component: AlunoComponent },
      { path: "alunos/crud", component: AlunoCrudComponent },
      { path: "instrutores", component: InstrutorComponent },
      { path: "instrutores/crud", component: InstrutorCrudComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
