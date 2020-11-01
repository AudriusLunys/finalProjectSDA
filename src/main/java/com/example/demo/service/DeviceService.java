package com.example.demo.service;

import com.example.demo.model.Device;
import com.example.demo.repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    public Device findById (Long id) {
        return deviceRepository.getOne(id);
    }

    public List<Device> findAll (){
        return deviceRepository.findAll();
    }

    public Device saveDevice (Device device){
        return deviceRepository.save(device);
    }

    public void deleteById (Long id) {
        deviceRepository.deleteById(id);
    }
}
