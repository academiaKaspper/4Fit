package com.fit.resources;

import com.fit.domain.Matricula;
import com.fit.domain.dtos.MatriculaDTO;
import com.fit.services.MatriculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/matriculas")
public class MatriculaResource {

    @Autowired
    private MatriculaService matriculaService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<MatriculaDTO> findById(@PathVariable Integer id){
        Matricula obj = matriculaService.findById(id);
        return ResponseEntity.ok().body(new MatriculaDTO(obj));
    }

    @GetMapping
    public ResponseEntity findAll(){
        return ResponseEntity.ok().body(matriculaService.findAll());
    }
    @PostMapping
    public ResponseEntity<MatriculaDTO> create(){
        return null;
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity delete(@PathVariable Integer id){
        matriculaService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
