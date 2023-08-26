package com.fit.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


public class Modalidade {

    private Long id;
    private String nome;
    private Long capacidadeAlunos;
    private double preco;
    private String horario;
    private String status; 
}

