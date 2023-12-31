package com.fit.domain.enums;

public enum Status {

    PAGO(0, "PAGO"), VENCIDO(1, "VENCIDO"), PENDENTE(2, "PENDENTE");

    private Integer codigo;
    private String descricao;

    Status(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public static Status toEnum(Integer cod){
        if (cod == null){
            return null;
        }
        for (Status x: Status.values()){
            if (cod.equals(x.getCodigo())){
                return x;
            }
        }

        throw new IllegalArgumentException("Status inválido!");
    }
}
