import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrutorComponent } from './instrutor.component';

const routes: Routes = [
  {
    path:'', component:InstrutorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrutorRoutingModule { }
