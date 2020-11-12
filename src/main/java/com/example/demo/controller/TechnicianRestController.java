package com.example.demo.controller;


import com.example.demo.model.Technician;
import com.example.demo.service.TechnicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TechnicianRestController {

    @Autowired
    private TechnicianService technicianService;

    @GetMapping("/technician")
    public List<Technician> getTechnicianList() {
        return technicianService.findAll();
    }

    @GetMapping("/technician/{id}")
    public ResponseEntity<?> getTechnicianById(@PathVariable Long id) {
        Optional<Technician> technician = technicianService.findById(id);
        return technician.map(response -> ResponseEntity.ok().body(response)).orElse
                (new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }
     // pervadint result i technicianResult
    @PostMapping("/technician")
    public ResponseEntity<Technician> addTechnician(@Valid @RequestBody Technician technician) throws URISyntaxException {
        Technician technicianResult = technicianService.saveTechnician(technician);
        return ResponseEntity.created(new URI("/api/technician" + technicianResult.getId())).body(technicianResult);
    }

    @PutMapping("/technician/{id}")
    public ResponseEntity<Technician> updateTechnician(@Valid @RequestBody Technician technician, @PathVariable Long id) {
        Technician technicianResult = technicianService.saveTechnician(technician);
        return ResponseEntity.ok().body(technicianResult);
    }

    @DeleteMapping("/technician/{id}")
    public ResponseEntity<?> deleteTechnician(@PathVariable Long id) {
        technicianService.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
