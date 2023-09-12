package com.fit.services;

import com.fit.domain.Matricula;
import com.fit.domain.dtos.MatriculaDTO;
import com.fit.domain.vo.MatriculaVo;
import com.fit.repositories.MatriculaRepository;
import com.fit.services.exceptions.ObjectnotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MatriculaService {

    @Autowired
    private MatriculaRepository matriculaRepository;

    public Matricula findById(Integer id) {
        Optional<Matricula> obj = matriculaRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! ID: " + id));
    }


    public List<MatriculaVo> findAll() {
        return matriculaRepository.findAll().stream().map(matricula -> {
            MatriculaVo matricula1 = new MatriculaVo();
            matricula1.setAluno(matricula.getAluno());
            matricula1.setTitulo(matricula.getTitulo());
            matricula1.setId(matricula.getId());
            matricula1.setInstrutor(matricula.getInstrutor().getNome());
            return matricula1;
        }).toList();

    }

    public void delete(Integer id) {
        matriculaRepository.deleteById(id);
    }
}
