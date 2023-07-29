package com.fit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fit.models.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
	
}

