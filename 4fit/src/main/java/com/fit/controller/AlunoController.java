package com.fit.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fit.repository.AlunosRepository;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    private final AlunosRepository alunoRepository;

    @Autowired
    public AlunoController(AlunosRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

	public AlunosRepository getAlunoRepository() {
		return alunoRepository;
	}

  
}

