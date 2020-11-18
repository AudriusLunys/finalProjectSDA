package com.example.demo.service;

import com.example.demo.model.Device;
import com.example.demo.model.Technician;
import com.example.demo.repository.TechnicianRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class TechnicianServiceTest {

    @Mock
    private TechnicianRepository technicianRepository;

    @InjectMocks
    private TechnicianService technicianService;

    @Test
    void findById() {
    }

    @Test
    void findAll() {

        List<Technician> technicians = new ArrayList<>();
        Technician technician = new Technician();
        technician.setFirstName("Tester");
        technicians.add(technician);
        given(technicianRepository.findAll()).willReturn(technicians);
        List<Technician> expected = technicianService.findAll();
        Assertions.assertEquals(expected, technicians);
    }

    @Test
    void saveTechnician() {
    }

    @Test
    void deleteById() {
    }
}