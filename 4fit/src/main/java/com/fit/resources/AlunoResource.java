package com.fit.resources;

import com.fit.domain.Aluno;
import com.fit.domain.dtos.AlunoDTO;
import com.fit.services.AlunoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/alunos")
public class AlunoResource {
    @Autowired
    private AlunoService instrutorService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<AlunoDTO> findById(@PathVariable Integer id){
        Aluno obj = instrutorService.findById(id);
        return ResponseEntity.ok().body(new AlunoDTO(obj));
    }

    @GetMapping
    public ResponseEntity<List<AlunoDTO>> findAll(){
        List<Aluno> list = instrutorService.findAll();
        List<AlunoDTO> listDTO = list.stream().map(obj -> new AlunoDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDTO);
    }
    @PostMapping
    public ResponseEntity<AlunoDTO> create(@Valid @RequestBody AlunoDTO objDTO){
        Aluno newObj = instrutorService.create(objDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<AlunoDTO> upadate(@PathVariable Integer id, @Valid @RequestBody AlunoDTO objDTO){
        Aluno obj = instrutorService.update(id, objDTO);
        return ResponseEntity.ok().body(new AlunoDTO(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<AlunoDTO> delete(@PathVariable Integer id){
        instrutorService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
