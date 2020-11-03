package com.example.demo.controller;

import com.example.demo.model.Device;
import com.example.demo.model.Technician;
import com.example.demo.repository.TechnicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class TechnicianRestController {

    @Autowired
    private TechnicianRepository technicianRepository;

    @GetMapping("/technicians")
    public List<Technician> getTechnicianList() {
        return technicianRepository.findAll();
    }

    @GetMapping("/technician/{id}")
    public ResponseEntity<?> getTechnicianById(@PathVariable Long id) {
        Optional<Technician> technician = technicianRepository.findById(id);
        return technician.map(response -> ResponseEntity.ok().body(response)).orElse
                (new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/technician")
    public ResponseEntity<Technician> addTechnician(@Valid @RequestBody Technician technician) throws URISyntaxException {
        Technician result = technicianRepository.save(technician);
        return ResponseEntity.created(new URI("/api/technician" + result.getId())).body(result);
    }

    @PutMapping("/technician/{id}")
    public ResponseEntity<Technician> updateTechnician(@Valid @RequestBody Technician technician, @PathVariable Long id) {
        Technician result = technicianRepository.save(technician);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/technician/{id}")
    public ResponseEntity<?> deleteTechnician(@PathVariable Long id) {
        technicianRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
