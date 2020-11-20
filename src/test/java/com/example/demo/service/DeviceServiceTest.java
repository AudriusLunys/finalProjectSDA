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
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class DeviceServiceTest {

    @Mock
    private DeviceRepository deviceRepository;

    @InjectMocks
    private DeviceService deviceService;

    @Test
    void findById() {
        final Long id = 1L;
        final Device device = new Device();
        device.setModel("testModel");
        device.setManufacturer("TestManufacturer");
        given(deviceRepository.findById(id)).willReturn(Optional.of(device));
        final Optional<Device> expected = deviceService.findById(id);
        Assertions.assertNotNull(expected);

    }

    @Test
    void findAll() {
        List<Device> devices = new ArrayList<>();
        Device device = new Device();
        device.setManufacturer("Samsung");
        devices.add(device);
        given(deviceRepository.findAll()).willReturn(devices);
        List<Device> expected = deviceService.findAll();
        Assertions.assertEquals(expected, devices);

    }

    @Test
    void saveDevice() {
        final Device device = new Device();
        device.setModel("testModel");
        device.setManufacturer("TestManufacturer");
        given(deviceRepository.save(device)).willReturn(device);
        final Device expected = deviceService.saveDevice(device);
        Assertions.assertNotNull(expected);
        verify(deviceRepository).save(any(Device.class));

    }

    @Test
    void deleteById() {
        final Long deviceId = 1L;
        deviceService.deleteById(deviceId);
        deviceService.deleteById(deviceId);

        verify(deviceRepository, times(2)).deleteById(deviceId);
    }
}