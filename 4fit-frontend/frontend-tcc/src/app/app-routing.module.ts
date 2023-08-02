import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from './core/base/base-layout/base-layout.component';
import { LoginComponent } from './core/login/login.component';

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
        path: 'instrutor',
        loadChildren: () =>
          import('./views/instrutor/instrutor.module').then((m) => m.InstrutorModule),
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
