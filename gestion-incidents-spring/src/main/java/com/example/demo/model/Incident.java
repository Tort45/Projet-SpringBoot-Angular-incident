package com.example.demo.model;

import com.example.demo.enume.Gravite;
import com.example.demo.enume.Type;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@RequiredArgsConstructor
@NoArgsConstructor
@ToString
@Getter @Setter
@Entity
public class Incident {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NonNull
	private String titre;
	
	@NonNull
	private String description;
	
	@Enumerated(value=EnumType.STRING)
	private Gravite gravite;
	
	@Enumerated(value=EnumType.STRING)
	private Type type;
	
	private int progression;
	
	@NonNull
	private String email;

}
