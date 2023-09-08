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

	public void setAluno(Aluno aluno) {
		
	}

	public void setStatus(Status pendente) {
		// TODO Auto-generated method stub
		
	}

	public void setMesReferencia(YearMonth now) {
		// TODO Auto-generated method stub
		
	}

	public void setDataPagamento(Object object) {
		// TODO Auto-generated method stub
		
	}

	public void setMatricula(Matricula matricula2) {
		// TODO Auto-generated method stub
		
	}

	public void setModalidade(Modalidade modalidade2) {
		// TODO Auto-generated method stub
		
	}
    
}