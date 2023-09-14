import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { AlunoCrudComponent } from "./components/aluno/aluno-crud/aluno-crud.component";
import { AlunoComponent } from "./components/aluno/aluno.component";
import { HomeComponent } from "./components/home/home.component";
import { InstrutorCreateComponent } from "./components/instrutor/instrutor-create/instrutor-create.component";
import { InstrutorListComponent } from "./components/instrutor/instrutor-list/instrutor-list.component";
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
      { path: "instrutores", component: InstrutorListComponent },
      { path: "instrutores/crud", component: InstrutorCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
