import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Operacao } from "src/app/enums/operacao-enum";
import { Aluno } from "src/app/models/aluno";
import { AlunoService } from "src/app/services/aluno.service";

//import { Aluno } from 'src/app/models/aluno';
//import { TecnicoService } from 'src/app/services/aluno.service';

@Component({
  selector: "app-aluno",
  templateUrl: "./aluno.component.html",
  styleUrls: ["./aluno.component.scss"],
})
export class AlunoComponent implements OnInit {
  ELEMENT_DATA: Aluno[] = [];

  displayedColumns: string[] = ["id", "nome", "cpf", "email", "acoes"];
  dataSource = new MatTableDataSource<Aluno>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: AlunoService, private route: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Aluno>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  crudAluno(id: number = null, operacao: string) {
    this.route.navigate(["/alunos/crud", { id: id, operacao: operacao }]);
  }
}
