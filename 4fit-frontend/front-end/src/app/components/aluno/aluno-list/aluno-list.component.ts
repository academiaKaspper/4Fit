import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Aluno } from "src/app/models/aluno";
import { AlunoService } from "src/app/services/aluno.service";

//import { Aluno } from 'src/app/models/aluno';
//import { TecnicoService } from 'src/app/services/aluno.service';

@Component({
  selector: "app-aluno-list",
  templateUrl: "./aluno-list.component.html",
  styleUrls: ["./aluno-list.component.scss"],
})
export class AlunoListComponent implements OnInit {
  ELEMENT_DATA: Aluno[] = [];

  displayedColumns: string[] = ["id", "nome", "cpf", "email", "acoes"];
  dataSource = new MatTableDataSource<Aluno>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: AlunoService) {}

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
}
