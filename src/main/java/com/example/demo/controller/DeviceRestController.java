package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.Device;
import com.example.demo.repository.DeviceRepository;
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
public class DeviceRestController {

    @Autowired
    private DeviceRepository deviceRepository;

    @GetMapping("/devices")
    public List<Device> getDeviceList() {
        return deviceRepository.findAll();
    }

    @GetMapping("/device/{id}")
    public ResponseEntity<?> getDeviceById(@PathVariable Long id) {
        Optional<Device> device = deviceRepository.findById(id);
        return device.map(response -> ResponseEntity.ok().body(response)).orElse
                (new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/device")
    public ResponseEntity<Device> addDevice(@Valid @RequestBody Device device) throws URISyntaxException {
        Device result = deviceRepository.save(device);
        return ResponseEntity.created(new URI("/api/device" + result.getId())).body(result);
    }

    @PutMapping("/device/{id}")
    public ResponseEntity<Device> updateDevice(@Valid @RequestBody Device device, @PathVariable Long id) {
       Device result = deviceRepository.save(device);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/device/{id}")
    public ResponseEntity<?> deleteDevice(@PathVariable Long id) {
        deviceRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
