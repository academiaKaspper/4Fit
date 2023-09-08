package com.fit.domain.vo;

import com.fit.domain.Aluno;
import lombok.Data;

@Data
public class MatriculaVo {

    private Integer id;

    private String titulo;

    private Aluno aluno;

    private String instrutor;

}
