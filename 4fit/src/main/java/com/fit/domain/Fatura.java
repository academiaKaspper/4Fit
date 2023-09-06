package com.fit.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fit.domain.enums.Status;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.YearMonth;

@Entity
public class Fatura {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Enumerated(EnumType.STRING)
	private Status status;
	@JsonFormat(pattern = "MM/yy")
	private YearMonth mesReferencia;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataPagamento;

	@ManyToOne
	@JoinColumn(name = "matricula_id")
	private Matricula matricula;

}
