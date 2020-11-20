package com.example.demo.service;

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
import java.util.Optional;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class TechnicianServiceTest {

    @Mock
    private TechnicianRepository technicianRepository;

    @InjectMocks
    private TechnicianService technicianService;

    @Test
    void findById() {
        final Long id = 1L;
        final Technician technician = new Technician();
        technician.setFirstName("testTech");
        technician.setLastName("techTech");
        given(technicianRepository.findById(id)).willReturn(Optional.of(technician));
        final Optional<Technician> expected = technicianService.findById(id);
        Assertions.assertNotNull(expected);
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
        final Technician technician = new Technician();
        technician.setFirstName("testTech");
        technician.setLastName("techTech");

        given(technicianRepository.save(technician)).willReturn(technician);
        final Technician expected = technicianService.saveTechnician(technician);
        Assertions.assertNotNull(expected);

        verify(technicianRepository).save(any(Technician.class));
    }

    @Test
    void deleteById() {
        final Long techniciamId = 1L;
        technicianService.deleteById(techniciamId);
        technicianService.deleteById(techniciamId);
        technicianService.deleteById(techniciamId);

        verify(technicianRepository, times(3)).deleteById(techniciamId);
    }
}