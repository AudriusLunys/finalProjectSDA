package com.example.demo.controller;

import com.example.demo.model.DeviceType;
import com.example.demo.model.Technician;
import com.example.demo.repository.DeviceTypeRepository;
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
public class DeviceTypeRestController {

    @Autowired
    private DeviceTypeRepository deviceTypeRepository;

    @GetMapping("/devicetypes")
    public List<DeviceType> getDeviceTypeList() {
        return deviceTypeRepository.findAll();
    }

    @GetMapping("/devicetype/{id}")
    public ResponseEntity<?> getDeviceTypeById(@PathVariable Long id) {
        Optional<DeviceType> deviceType = deviceTypeRepository.findById(id);
        return deviceType.map(response -> ResponseEntity.ok().body(response)).orElse
                (new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/devicetype")
    public ResponseEntity<DeviceType> addDeviceType(@RequestBody DeviceType deviceType) throws URISyntaxException {
        DeviceType result = deviceTypeRepository.save(deviceType);
        return ResponseEntity.created(new URI("/api/devicetype" + result.getId())).body(result);
    }

    @PutMapping("/devicetype/{id}")
    public ResponseEntity<DeviceType> updateDeviceType(@Valid @RequestBody DeviceType deviceType, @PathVariable Long id) {
        DeviceType result = deviceTypeRepository.save(deviceType);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/devicetype/{id}")
    public ResponseEntity<?> deleteDeviceType(@PathVariable Long id) {
       deviceTypeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }



}
