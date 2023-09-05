package com.fit.domain;

import com.fit.domain.enums.Turno;
import jakarta.persistence.*;

@Entity
public class Modalidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private Long capacidadeAlunos;
    private double preco;
    @Enumerated(EnumType.STRING)
    private Turno turno;

    @ManyToOne
    @JoinColumn(name = "matricula_id")
    private Matricula matricula;
}

//    @ManyToMany
//    @JoinTable(name = "matricula_modalidade",
//            joinColumns = @JoinColumn(name = "matricula_id"),
//            inverseJoinColumns = @JoinColumn(name = "modalidade_id"))
//    private List<Modalidade> modalidades;