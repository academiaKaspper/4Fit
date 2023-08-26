package com.fit.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fit.domain.enums.Perfil;
import jakarta.persistence.*;
import lombok.Data;

@Entity
public class Aluno extends Pessoa implements Serializable {
	private static final long serialVersionUID = 1L;
	@JsonIgnore
	@OneToMany(mappedBy = "aluno")
	private List<Matricula> matriculas = new ArrayList<>();

	public Aluno() {
		super();
		addPerfis(Perfil.ALUNO);
	}

	public Aluno(Integer id, String nome, String cpf, String dataNascimento, String telefone, String email, String senha, String tipo) {
		super(id, nome, cpf, dataNascimento, telefone, email, senha, tipo);
		addPerfis(Perfil.ALUNO);
	}

	public List<Matricula> getMatriculas() {
		return matriculas;
	}

	public void setMatriculas(List<Matricula> matriculas) {
		this.matriculas = matriculas;
	}
}
