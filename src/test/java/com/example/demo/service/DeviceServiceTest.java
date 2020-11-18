package com.example.demo.service;


import com.example.demo.model.Device;
import com.example.demo.repository.DeviceRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;


import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class DeviceServiceTest {

    @Mock
    private DeviceRepository deviceRepository;

    @InjectMocks
    private DeviceService deviceService;

    @Test
    void findById() {
    }

    @Test
    void findAll() {
        List<Device> devices = new ArrayList<>();
        Device device = new Device();
        device.setManufacturer("Samsung");
        devices.add(device);
        given(deviceRepository.findAll()).willReturn(devices);
        List<Device> expected = deviceService.findAll();
        Assertions.assertEquals(expected,devices);

    }

    @Test
    void saveDevice() {
    }

    @Test
    void deleteById() {
    }
}