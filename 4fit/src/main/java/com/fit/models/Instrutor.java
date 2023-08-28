package com.fit.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Instrutor extends Pessoa {

	@ManyToOne
	@JoinColumn(name = "modalidade_id")
	private Modalidade modalidade;

	private boolean status;
}
