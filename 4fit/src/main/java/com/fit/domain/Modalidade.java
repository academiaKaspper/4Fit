package com.fit.domain;

import java.io.Serializable;
import java.util.List;

import com.fit.domain.dtos.ModalidadeDTO;
import com.fit.domain.enums.Turno;
import jakarta.persistence.*;

@Entity
public class Modalidade implements Serializable {
    private static final long serialVersionUID = 1L;
    
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

	public Modalidade(ModalidadeDTO objDTO) {
	}

	public Integer getId() {
		return null;
	}

	public String getNome() {
		return null;
	}

	public Long getCapacidadeAlunos() {
		return null;
	}

	public double getPreco() {
		return 0;
	}

	public List<Modalidade> getModalidade() {
		return null;
	}

	public void setCapacidadeAlunos(Long capacidadeAlunos) {
		this.capacidadeAlunos = capacidadeAlunos;
	}
	
}

//    @ManyToMany
//    @JoinTable(name = "matricula_modalidade",
//            joinColumns = @JoinColumn(name = "matricula_id"),
//            inverseJoinColumns = @JoinColumn(name = "modalidade_id"))
//    private List<Modalidade> modalidades;