package com.fit.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Aluno extends Pessoa {

	
	@ManyToOne
	@JoinColumn(name = "modalidade_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Modalidade modalidade;
	private boolean status;
	private LocalDate dataMatricula;
	
	
	public Aluno(Modalidade modalidade, boolean status, LocalDate dataMatricula) {
		super();
		this.modalidade = modalidade;
		this.status = status;
		this.dataMatricula = dataMatricula;
	}


	public Modalidade getModalidade() {
		return modalidade;
	}


	public void setModalidade(Modalidade modalidade) {
		this.modalidade = modalidade;
	}


	public boolean isStatus() {
		return status;
	}


	public void setStatus(boolean status) {
		this.status = status;
	}


	public LocalDate getDataMatricula() {
		return dataMatricula;
	}


	public void setDataMatricula(LocalDate dataMatricula) {
		this.dataMatricula = dataMatricula;
	}
	
	

}


