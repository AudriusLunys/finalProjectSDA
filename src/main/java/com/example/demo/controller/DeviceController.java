package com.example.demo.controller;

import com.example.demo.model.Device;
import com.example.demo.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class DeviceController {

    @Autowired
    private DeviceService deviceService;

    @GetMapping("/device")
    public String findAllDevices(Model model) {
        List<Device> deviceList = deviceService.findAllDevices();
        model.addAttribute("device", deviceList);
        return "device";
    }
}
