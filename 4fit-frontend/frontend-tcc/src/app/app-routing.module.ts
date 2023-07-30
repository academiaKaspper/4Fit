import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './views/aluno/aluno.component';
import { LoginComponent } from './core/login/login.component';
import { BaseLayoutComponent } from './core/base/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'aluno',
        loadChildren: () =>
          import('./views/aluno/aluno.module').then((m) => m.AlunoModule),
      },
      {
        path: '**',
        redirectTo: 'aluno',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
