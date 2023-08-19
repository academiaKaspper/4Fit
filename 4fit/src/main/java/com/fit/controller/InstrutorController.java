package com.fit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fit.repository.InstrutorRepository;

@RestController
@RequestMapping("/instrutores")
public class InstrutorController {

    private final InstrutorRepository instrutorRepository;

    @Autowired
    public InstrutorController(InstrutorRepository instrutorRepository) {
        this.instrutorRepository = instrutorRepository;
    }

	public InstrutorRepository getInstrutorRepository() {
		return instrutorRepository;
	}

}

