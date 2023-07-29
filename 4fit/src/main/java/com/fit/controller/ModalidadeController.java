package com.fit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fit.repository.ModalidadeRepository;

@RestController
@RequestMapping("/modalidades")
public class ModalidadeController {

    private final ModalidadeRepository modalidadeRepository;

    @Autowired
    public ModalidadeController(ModalidadeRepository modalidadeRepository) {
        this.modalidadeRepository = modalidadeRepository;
    }

}

