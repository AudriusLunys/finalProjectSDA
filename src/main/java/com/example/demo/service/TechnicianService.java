package com.example.demo.service;


import com.example.demo.model.Technician;
import com.example.demo.repository.TechnicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TechnicianService {

    @Autowired
    private TechnicianRepository technicianRepository;

    public Optional<Technician> findById(Long id) {
        return technicianRepository.findById(id);
    }

    public List<Technician> findAll() {
        return technicianRepository.findAll();
    }

    public Technician saveTechnician(Technician technician) {
        return technicianRepository.save(technician);

    }

    public void deleteById(Long id) {
        technicianRepository.deleteById(id);
    }
}
