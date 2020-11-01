package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public Customer findCustomerById(Long id) {
     return customerRepository.getOne(id);
    }

    public List<Customer> findAllCustomers() {
     return customerRepository.findAll();
    }

    public Customer saveCustomer(Customer customer) {
     return customerRepository.save(customer);
    }


}
