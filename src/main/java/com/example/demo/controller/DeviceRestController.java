package com.example.demo.controller;


import com.example.demo.model.Device;
import com.example.demo.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DeviceRestController {

    @Autowired
    private DeviceService deviceService;

    @GetMapping("/device")
    public List<Device> getDeviceList() {
        return deviceService.findAll();
    }

    @GetMapping("/device/{id}")
    public ResponseEntity<?> getDeviceById(@PathVariable Long id) {
        Optional<Device> device = deviceService.findById(id);
        return device.map(response -> ResponseEntity.ok().body(response)).orElse
                (new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/device")
    public ResponseEntity<Device> addDevice(@Valid @RequestBody Device device) throws URISyntaxException {
        Device deviceResult = deviceService.saveDevice(device);
        return ResponseEntity.created(new URI("/api/device" + deviceResult.getId())).body(deviceResult);
    }

    @PutMapping("/device/{id}")
    public ResponseEntity<Device> updateDevice(@Valid @RequestBody Device device, @PathVariable Long id) {
        Device deviceResult = deviceService.saveDevice(device);
        return ResponseEntity.ok().body(deviceResult);
    }

    @DeleteMapping("/device/{id}")
    public ResponseEntity<?> deleteDevice(@PathVariable Long id) {
        deviceService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
