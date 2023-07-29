package com.fit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fit.models.Modalidade;

public interface ModalidadeRepository extends JpaRepository<Modalidade, Long> {
}
