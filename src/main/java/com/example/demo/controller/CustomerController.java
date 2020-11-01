package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.Device;
import com.example.demo.service.CustomerService;
import com.example.demo.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class CustomerController {
    @Autowired
    private CustomerService customerService;



    @GetMapping("/customer")
    public String findAllCustomers(Model model) {
        List<Customer> customerList = customerService.findAllCustomers();
        model.addAttribute("customer", customerList);
        return "/customer";
    }


}
