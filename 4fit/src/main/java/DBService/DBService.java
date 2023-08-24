package DBService;


import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fit.models.Alunos;
import com.fit.repository.AlunosRepository;

@Service
public class DBService {

    @Autowired
    private AlunosRepository alunosRepository;

    public void popularTabelaAlunos() {
    
        Alunos aluno1 = new Alunos();
        aluno1.setNome("Fulano de Tal");
        aluno1.setCpf("123.456.789-00");
        aluno1.setDataNascimento(LocalDate.of(1990, 5, 15));
        aluno1.setTelefone("(11) 1234-5678");
        aluno1.setEmail("fulano@example.com");
        aluno1.setTipo("Regular");

        Alunos aluno2 = new Alunos();
        aluno2.setNome("Ciclano Silva");
        aluno2.setCpf("987.654.321-00");
        aluno2.setDataNascimento(LocalDate.of(1995, 8, 22));
        aluno2.setTelefone("(22) 9876-5432");
        aluno2.setEmail("ciclano@example.com");
        aluno2.setTipo("Especial");

        alunosRepository.save(aluno1);
        alunosRepository.save(aluno2);
    }
}
