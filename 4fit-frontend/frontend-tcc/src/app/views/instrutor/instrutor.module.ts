import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrutorRoutingModule } from './instrutor-routing.module';
import { InstrutorComponent } from './instrutor.component';
import { SharedModule } from 'src/app/core/shared/module/shared/shared.module';


@NgModule({
  declarations: [InstrutorComponent],
  imports: [
    CommonModule,
    InstrutorRoutingModule,
    SharedModule
  ]
})
export class InstrutorModule { }
