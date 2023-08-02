package com.fit.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Aluno extends Pessoa {

    @ManyToOne
    @JoinColumn(name = "modalidade_id")
    private Modalidade modalidade;

    private boolean status;
    private LocalDate dataMatricula;

}

