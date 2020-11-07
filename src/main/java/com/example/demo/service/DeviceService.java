package com.example.demo.service;

import com.example.demo.model.Device;
import com.example.demo.model.Technician;
import com.example.demo.repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    public Optional<Device> findById(Long id) {
        return deviceRepository.findById(id);
    }

    public List<Device> findAll() {
        return deviceRepository.findAll();
    }

    public Device saveDevice(Device device) {
        return deviceRepository.save(device);

    }
    public void deleteById (Long id) {
        deviceRepository.deleteById(id);
    }
}
