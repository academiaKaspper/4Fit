package com.fit.services;

import com.fit.domain.Instrutor;
import com.fit.domain.Pessoa;
import com.fit.domain.dtos.InstrutorDTO;
import com.fit.repositories.InstrutorRepository;
import com.fit.repositories.PessoaRepository;
import com.fit.services.exceptions.DataIntegrityViolationException;
import com.fit.services.exceptions.ObjectnotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstrutorService {
    @Autowired
    private InstrutorRepository instrutorRepository;
    @Autowired
    private PessoaRepository pessoaRepository;

    public Instrutor findById(Integer id){
        Optional<Instrutor> obj = instrutorRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Instrutor> findAll() {
        return instrutorRepository.findAll();
    }

    public Instrutor create(InstrutorDTO objDTO) {
        objDTO.setId(null);
        validaPorCpfEEmail(objDTO);
        Instrutor newObj = new Instrutor(objDTO);
        return instrutorRepository.save(newObj);
    }

    private void validaPorCpfEEmail(InstrutorDTO objDTO) {
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
