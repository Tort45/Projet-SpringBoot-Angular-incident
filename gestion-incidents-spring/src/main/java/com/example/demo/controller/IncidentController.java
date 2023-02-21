package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.IncidentDao;
import com.example.demo.enume.Gravite;
import com.example.demo.enume.Type;
import com.example.demo.model.Incident;


@RestController
@RequestMapping("/incidents")
public class IncidentController {

		@Autowired
		IncidentDao idao;
	
		@GetMapping({"","/"})
		public ResponseEntity<List<Incident>> finAll(@RequestParam(defaultValue = "0") Integer init) {
			
			if (init == 1) {
				this.idao.save(new Incident ("retrait","montant trop élevé","test@mail.fr"));
			}
			
			return new ResponseEntity<List<Incident>>(idao.findAll(),HttpStatus.OK);						
		}

		
		@GetMapping("/{id}")
		public ResponseEntity<Incident> findOne(@PathVariable Long id) {
			Optional<Incident> optionIncident = idao.findById(id);
			
			return optionIncident.isPresent() ?
					new ResponseEntity<Incident>(optionIncident.get(), HttpStatus.OK) :
					new ResponseEntity<Incident>(HttpStatus.NOT_FOUND);
		}
		
		@DeleteMapping("/{id}")
		public ResponseEntity<Void> deleteOne(@PathVariable long id) {
			this.idao.deleteById(id);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		
		@PostMapping({"","/"})
		public ResponseEntity<Incident> addOne(@RequestBody Incident artiste) {
			this.idao.save(artiste);
			return new ResponseEntity<Incident>(artiste,HttpStatus.CREATED);
		}
	
	
}
