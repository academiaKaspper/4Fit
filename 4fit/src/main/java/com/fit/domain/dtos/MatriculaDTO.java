package com.fit.domain.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class MatriculaDTO {

    private Integer id;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataAbertura = LocalDate.now();
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataFechamento;
    private Integer status;
    private Integer turno;
    private String titulo;
    private String observacoes;
    private Integer aluno;
    private Integer instrutor;
}
