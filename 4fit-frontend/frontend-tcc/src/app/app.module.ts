import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './core/base/base-layout/base-layout.component';
import { LoginComponent } from './core/login/login.component';
import { SharedModule } from './core/shared/module/shared/shared.module';
import { FooterComponent } from './core/base/footer/footer.component';
import { NavbarComponent } from './core/base/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseLayoutComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
