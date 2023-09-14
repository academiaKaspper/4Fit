import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Instrutor } from "src/app/models/instrutor";
import { InstrutorService } from "src/app/services/instrutor.service";

@Component({
  selector: "app-instrutor",
  templateUrl: "./instrutor.component.html",
  styleUrls: ["./instrutor.component.scss"],
})
export class InstrutorComponent implements OnInit {
  ELEMENT_DATA: Instrutor[] = [];

  displayedColumns: string[] = ["id", "nome", "cpf", "email", "acoes"];
  dataSource = new MatTableDataSource<Instrutor>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: InstrutorService, private route: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Instrutor>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  crudInstrutor(id: number = null, operacao: string) {
    this.route.navigate(["/instrutores/crud", { id: id, operacao: operacao }]);
  }
}
