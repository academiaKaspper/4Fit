import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { InstrutorListComponent } from "./components/instrutor/instrutor-list/instrutor-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AlunoListComponent } from "./components/aluno/aluno-list/aluno-list.component";
import { InstrutorDeleteComponent } from "./components/instrutor/instrutor-delete/instrutor-delete.component";
import { AuthGuard } from "./auth/auth.guard";
import { InstrutorCreateComponent } from "./components/instrutor/instrutor-create/instrutor-create.component";
import { InstrutorUpdateComponent } from "./components/instrutor/instrutor-update/InstrutorUpdateComponent";
import { AlunoCreateComponent } from "./components/aluno/aluno-create/aluno-create.component";
import { AlunoUpdateComponent } from "./components/aluno/aluno-update/aluno-updateComponent";
import { AlunoDeleteComponent } from "./components/aluno/aluno-delete/aluno-delete.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    canActivate: [AuthGuard],
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "alunos", component: AlunoListComponent },
      { path: "alunos/create", component: AlunoCreateComponent },
      { path: "alunos/update/:id", component: AlunoUpdateComponent },
      { path: "alunos/delete/:id", component: AlunoDeleteComponent },
      { path: "instrutores", component: InstrutorListComponent },
      { path: "instrutores/create", component: InstrutorCreateComponent },
      { path: "instrutores/update/:id", component: InstrutorUpdateComponent },
      { path: "instrutores/delete/:id", component: InstrutorDeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
