package com.fit.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fit.domain.dtos.AlunoDTO;
import com.fit.domain.enums.Perfil;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

import java.io.Serializable;
import java.util.stream.Collectors;

@Entity
public class Aluno extends Pessoa implements Serializable {
    private static final long serialVersionUID = 1L;


    @JsonIgnore
    @OneToOne
    private Matricula matriculas;

    public Aluno() {
        super();
        addPerfis(Perfil.ALUNO);
    }

    public Aluno(Integer id, String nome, String cpf, String dataNascimento, String telefone, String email, String senha, String tipo) {
        super(id, nome, cpf, dataNascimento, telefone, email, senha, tipo);
        addPerfis(Perfil.ALUNO);
    }

    public Aluno(AlunoDTO obj) {
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

    public Matricula getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Matricula matriculas) {
        this.matriculas = matriculas;
    }

	public void setFatura(Fatura fatura) {

	}

	public Object getFatura() {
		// TODO Auto-generated method stub
		return null;
	}

}