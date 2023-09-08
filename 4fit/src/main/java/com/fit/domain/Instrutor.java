package com.fit.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fit.domain.dtos.InstrutorDTO;
import com.fit.domain.enums.Perfil;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity

public class Instrutor extends Pessoa implements Serializable {

	private static final long serialVersionUID = 1L;
	@JsonIgnore
	@OneToMany
	private List<Aluno> alunos = new ArrayList<>();


	public Instrutor() {
		addPerfis(Perfil.COLABORADOR);
	}

	public Instrutor(Integer id, String nome, String cpf,String dataNascimento, String telefone, String email, String senha, String tipo) {
		super(id, nome, cpf, dataNascimento, telefone, email, senha, tipo);
		addPerfis(Perfil.COLABORADOR);
	}
	public Instrutor(InstrutorDTO obj) {
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.cpf = obj.getCpf();
		this.dataNascimento = obj.getDataNascimento();
		this.telefone = obj.getTelefone();
		this.email = obj.getEmail();
		this.senha = obj.getSenha();
		this.tipo = obj.getTipo();
		this.perfis = obj.getPerfis().stream().map(x -> x.getCodigo()).collect(Collectors.toSet());
		this.dataCriacao = obj.getDataCriacao();
	}

	public List<Aluno> getAlunos() {
		return alunos;
	}

	public void setAlunos(List<Aluno> alunos) {
		this.alunos = alunos;
	}
}