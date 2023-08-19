package com.fit.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "ALUNOS", schema = "PESSOA")
@Data
public class Aluno extends Pessoa {

	@ManyToOne
	@JoinColumn(name = "modalidade_id")
	private Modalidade modalidade;

	private boolean status;
	private LocalDate dataMatricula;

}
