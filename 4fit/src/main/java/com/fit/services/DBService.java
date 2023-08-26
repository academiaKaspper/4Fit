package com.fit.services;

import com.fit.domain.Aluno;
import com.fit.domain.Instrutor;
import com.fit.domain.Matricula;
import com.fit.domain.enums.Perfil;
import com.fit.domain.enums.Status;
import com.fit.domain.enums.Turno;
import com.fit.repositories.AlunoRepository;
import com.fit.repositories.InstrutorRepository;
import com.fit.repositories.MatriculaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class DBService {

    @Autowired
    private InstrutorRepository instrutorRepository;
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private MatriculaRepository matriculaRepository;

    public void instanciaDB(){
        Instrutor instrutor1 = new Instrutor(null, "Vinicius Diniz", "123.456.789-00", "20/04/1985",
                "(11) 98765-4321", "vinicius@email.com", "senha123", "TipoX");
        instrutor1.addPerfis(Perfil.ADMIN);
        Instrutor instrutor2 = new Instrutor(null, "Maria Santos", "987.654.321-11", "15/05/1990",
                "(11) 91234-5678", "maria_santos@email.com", "senha456", "TipoY");

        Instrutor instrutor3 = new Instrutor(null, "Augusto Santos", "187.454.221-12", "5/05/1990",
                "(11) 91234-5678", "augusto@email.com", "senha9496", "TipoM");

        Instrutor instrutor4 = new Instrutor(null, "João Lima", "123.456.789-09","10/06/1987",
                "(11) 98888-8888", "joao_lima@email.com", "senha789", "TipoZ");

        Instrutor instrutor5 = new Instrutor(null, "Lucas Almeida", "111.222.333-44", "05/07/1980",
                "(11) 97777-7777", "lucas@email.com", "senha111", "TipoA");

        Instrutor instrutor6 = new Instrutor(null, "Ana Silva", "555.666.777-88", "20/08/1992",
                "(11) 95555-5555", "ana@email.com", "senha222", "TipoB");

        Instrutor instrutor7 = new Instrutor(null, "Carla Pereira", "999.000.111-22", "15/01/1985",
                "(11) 99999-9999", "carla@email.com", "senha333", "TipoC");

        Instrutor instrutor8 = new Instrutor(null, "Roberto Carlos", "444.555.466-77", "25/02/1975",
                "(11) 94444-4444", "roberto@email.com", "senha444", "TipoD");

        Aluno aluno1 = new Aluno(null, "Alice Santos", "100.200.340-40", "15/01/2000",
                "(11) 90000-0001", "alice@email.com", "alice123", "AlunoTipo1");

        Aluno aluno2 = new Aluno(null, "Carlos Silva", "200.300.580-50", "20/05/1999",
                "(11) 90000-0002", "carlos@email.com", "carlos456", "AlunoTipo2");

        Aluno aluno3 = new Aluno(null, "Maria Oliveira", "300.400.510-60", "10/08/2001",
                "(11) 90000-0003", "maria@email.com", "maria789", "AlunoTipo1");

        Aluno aluno4 = new Aluno(null, "João Pereira", "400.500.630-70", "25/03/2002",
                "(11) 90000-0004", "joao@email.com", "joao101", "AlunoTipo2");

        Aluno aluno5 = new Aluno(null, "Fernanda Souza", "500.600.760-80", "05/12/2000",
                "(11) 90000-0005", "fernanda@email.com", "fernanda202", "AlunoTipo1");

        Aluno aluno6 = new Aluno(null, "Rafael Santos", "600.700.890-90", "18/07/2003",
                "(11) 90000-0006", "rafael@email.com", "rafael303", "AlunoTipo2");

        Aluno aluno7 = new Aluno(null, "Isabela Rodrigues", "700.800.970-10", "30/10/1998",
                "(11) 90000-0007", "isabela@email.com", "isabela404", "AlunoTipo1");

        Aluno aluno8 = new Aluno(null, "Pedro Almeida", "800.900.10=730-20", "12/02/2004",
                "(11) 90000-0008", "pedro@email.com", "pedro505", "AlunoTipo2");



        Matricula matricula1 = new Matricula(null, Status.PAGO, Turno.MANHA,"teste1","testeMatricula",aluno1,instrutor7);
        Matricula matricula2 = new Matricula(null, Status.PENDENTE, Turno.TARDE, "teste2", "testeMatricula", aluno2, instrutor8);
        Matricula matricula3 = new Matricula(null, Status.PAGO, Turno.NOITE, "teste3", "testeMatricula", aluno3, instrutor2);
        Matricula matricula4 = new Matricula(null, Status.PENDENTE, Turno.MANHA, "teste4", "testeMatricula", aluno4, instrutor3);
        Matricula matricula5 = new Matricula(null, Status.PAGO, Turno.TARDE, "teste5", "testeMatricula", aluno5, instrutor1);
        Matricula matricula6 = new Matricula(null, Status.PAGO, Turno.NOITE, "teste6", "testeMatricula", aluno6, instrutor5);
        Matricula matricula7 = new Matricula(null, Status.PENDENTE, Turno.MANHA, "teste7", "testeMatricula", aluno7, instrutor6);
        Matricula matricula8 = new Matricula(null, Status.PAGO, Turno.TARDE, "teste8", "testeMatricula", aluno8, instrutor4);

        instrutorRepository.saveAll(Arrays.asList(instrutor1,instrutor2,instrutor3,instrutor4,instrutor5,instrutor6,instrutor7,instrutor8));
        alunoRepository.saveAll(Arrays.asList(aluno1,aluno2,aluno3 ,aluno4 ,aluno5 ,aluno6,aluno7,aluno8));
        matriculaRepository.saveAll(Arrays.asList(matricula1,matricula2,matricula3,matricula4,matricula5,matricula6,matricula7,matricula8));
    }
}