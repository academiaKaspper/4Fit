package com.fit.domain.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fit.domain.enums.Status;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.YearMonth;

public class FaturaDTO implements Serializable {
    private static final long serialVersionUID = 1L;
//testeFinal
    private Integer id;

    private Status status;

    @JsonFormat(pattern = "MM/yy")
    private YearMonth mesReferencia;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataPagamento;

    private Integer matriculaId;

    private Integer modalidadeId;

    public FaturaDTO() {
    }

    public FaturaDTO(Integer id, Status status, YearMonth mesReferencia, LocalDate dataPagamento, Integer matriculaId, Integer modalidadeId) {
        this.id = id;
        this.status = status;
        this.mesReferencia = mesReferencia;
        this.dataPagamento = dataPagamento;
        this.matriculaId = matriculaId;
        this.modalidadeId = modalidadeId;
    }

    // Getters e Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public YearMonth getMesReferencia() {
        return mesReferencia;
    }

    public void setMesReferencia(YearMonth mesReferencia) {
        this.mesReferencia = mesReferencia;
    }

    public LocalDate getDataPagamento() {
        return dataPagamento;
    }

    public void setDataPagamento(LocalDate dataPagamento) {
        this.dataPagamento = dataPagamento;
    }

    public Integer getMatriculaId() {
        return matriculaId;
    }

    public void setMatriculaId(Integer matriculaId) {
        this.matriculaId = matriculaId;
    }

    public Integer getModalidadeId() {
        return modalidadeId;
    }

    public void setModalidadeId(Integer modalidadeId) {
        this.modalidadeId = modalidadeId;
    }
}

