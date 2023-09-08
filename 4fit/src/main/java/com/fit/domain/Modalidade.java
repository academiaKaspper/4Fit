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

	public Modalidade(Integer id, String nome, Long capacidadeAlunos, double preco, Turno turno) {
		super();
		this.id = id;
		this.nome = nome;
		this.capacidadeAlunos = capacidadeAlunos;
		this.preco = preco;
		this.turno = turno;

	}
	
	@ManyToMany(mappedBy = "modalidades")
    private List<Matricula> matriculas;

	@ManyToOne
	@JoinColumn(name = "modalidade_id")
	private Modalidade modalidade;

	@ManyToMany
	@JoinTable(name = "matricula_modalidade", joinColumns = @JoinColumn(name = "matricula_id"), inverseJoinColumns = @JoinColumn(name = "modalidade_id"))
	private List<Modalidade> modalidades;

	public Modalidade(ModalidadeDTO objDTO) {
	}

	public Integer getId() {
		return null;
	}

	public String getNome() {
		return nome;
	}

	public Long getCapacidadeAlunos() {
		return capacidadeAlunos;
	}

	public double getPreco() {
		return preco;
	}

	public List<Modalidade> getModalidade() {
		return null;
	}

	public void setCapacidadeAlunos(Long capacidadeAlunos) {
		this.capacidadeAlunos = capacidadeAlunos;
	}

}