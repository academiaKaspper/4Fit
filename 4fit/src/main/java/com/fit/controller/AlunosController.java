package com.fit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fit.models.Alunos;
import com.fit.repository.AlunosRepository;

import DBService.DBService;

@RestController
@RequestMapping("/alunos")
public class AlunosController {

    @Autowired
    private AlunosRepository alunosRepository;

    @Autowired
    private DBService dbService;

    @PostMapping("/popular")
    public String popularTabelaAlunos() {
        dbService.popularTabelaAlunos();
        return "Tabela de alunos populada com sucesso!";
    }

    @GetMapping("/listar")
    public Iterable<Alunos> listarAlunos() {
        return alunosRepository.findAll();
    }
}

