package com.fit.services;

import com.fit.domain.Aluno;
import com.fit.domain.Pessoa;
import com.fit.domain.dtos.AlunoDTO;
import com.fit.repositories.AlunoRepository;
import com.fit.repositories.PessoaRepository;
import com.fit.services.exceptions.DataIntegrityViolationException;
import com.fit.services.exceptions.ObjectnotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository instrutorRepository;
    @Autowired
    private PessoaRepository pessoaRepository;

    public Aluno findById(Integer id){
        Optional<Aluno> obj = instrutorRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Aluno> findAll() {
        return instrutorRepository.findAll();
    }

    public Aluno create(AlunoDTO objDTO) {
        objDTO.setId(null);
        validaPorCpfEEmail(objDTO);
        Aluno newObj = new Aluno(objDTO);
        return instrutorRepository.save(newObj);
    }
    public Aluno update(Integer id, @Valid AlunoDTO objDTO) {
        objDTO.setId(id);
        Aluno oldObj = findById(id);
        validaPorCpfEEmail(objDTO);
        oldObj = new Aluno(objDTO);
        return instrutorRepository.save(oldObj);
    }
    public void delete(Integer id) {
        Aluno obj = findById(id);
        if(obj.getMatriculas().getId() != 0){
            throw new DataIntegrityViolationException("O aluno contém matriculados em dias!");
        }
            instrutorRepository.deleteById(id);
    }

    private void validaPorCpfEEmail(AlunoDTO objDTO) {
        Optional<Pessoa> obj = pessoaRepository.findByCpf(objDTO.getCpf());
        if(obj.isPresent() && obj.get().getId() != objDTO.getId()){
            throw new DataIntegrityViolationException("CPF já cadastrado no sistema!");
        }
        obj = pessoaRepository.findByEmail(objDTO.getEmail());
        if(obj.isPresent() && obj.get().getId() != objDTO.getId()){
            throw new DataIntegrityViolationException("E-mail já cadastrado no sistema!");
        }
    }



}
