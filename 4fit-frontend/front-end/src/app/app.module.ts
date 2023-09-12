import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlunoCrudComponent } from "./components/aluno/aluno-create/aluno-create.component";
import { AlunoListComponent } from "./components/aluno/aluno-list/aluno-list.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { InstrutorCreateComponent } from "./components/instrutor/instrutor-create/instrutor-create.component";
import { InstrutorDeleteComponent } from "./components/instrutor/instrutor-delete/instrutor-delete.component";
import { InstrutorListComponent } from "./components/instrutor/instrutor-list/instrutor-list.component";
import { InstrutorUpdateComponent } from "./components/instrutor/instrutor-update/InstrutorUpdateComponent";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    InstrutorListComponent,
    AlunoListComponent,
    LoginComponent,
    InstrutorDeleteComponent,
    InstrutorUpdateComponent,
    InstrutorCreateComponent,
    AlunoCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
