package com.fit.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Instrutor extends Pessoa {

    @ManyToOne
    @JoinColumn(name = "modalidade_id")
    private Modalidade modalidade;

    private Boolean status;
}
