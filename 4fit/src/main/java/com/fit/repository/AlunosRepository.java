package com.fit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fit.models.Alunos;

@Repository
public interface AlunosRepository extends JpaRepository<Alunos, Long> {
    
}


