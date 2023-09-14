package com.fit.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fit.domain.enums.Status;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.YearMonth;

@Entity
public class Fatura implements Serializable {
    private static final long serialVersionUID = 1L;
    
    

    public Fatura(Integer id, Status status, YearMonth mesReferencia, LocalDate dataPagamento, Matricula matricula,
			Modalidade modalidade) {
		super();
		this.id = id;
		this.status = status;
		this.mesReferencia = mesReferencia;
		this.dataPagamento = dataPagamento;
		this.matricula = matricula;
		this.modalidade = modalidade;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING) // Mapeamento do enum Status
    private Status status;

    @JsonFormat(pattern = "MM/yy")
    private YearMonth mesReferencia;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataPagamento;

    @ManyToOne
    @JoinColumn(name = "matricula_id")
    private Matricula matricula;

    @ManyToOne
    @JoinColumn(name = "modalidade_id")
    private Modalidade modalidade;


    public Fatura() {
        super();
    }



    public void setAluno(Aluno aluno) {
		
	}

	public void setStatus(Status pendente) {
		// TODO Auto-generated method stub
		
	}

	public void setMesReferencia(YearMonth now) {
		// TODO Auto-generated method stub
		
	}


	public void setMatricula(Matricula matricula2) {
		// TODO Auto-generated method stub
		
	}

	public void setModalidade(Modalidade modalidade2) {
		// TODO Auto-generated method stub
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDate getDataPagamento() {
		return dataPagamento;
	}

	public void setDataPagamento(LocalDate dataPagamento) {
		this.dataPagamento = dataPagamento;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Status getStatus() {
		return status;
	}

	public YearMonth getMesReferencia() {
		return mesReferencia;
	}

	public Matricula getMatricula() {
		return matricula;
	}

	public Modalidade getModalidade() {
		return modalidade;
	}
	
    
}