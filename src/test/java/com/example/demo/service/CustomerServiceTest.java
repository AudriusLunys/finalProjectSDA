package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;
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
class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @InjectMocks
    private CustomerService customerService;

    @Test
    void findById() {
        final Long id = 1L;
        final Customer customer = new Customer();
        customer.setFirstName("test");
        customer.setFirstName("as");
        given(customerRepository.findById(id)).willReturn(Optional.of(customer));
        final Optional<Customer> expected = customerService.findById(id);
        Assertions.assertNotNull(expected);
    }

    @Test
    void findAll() {
        List<Customer> customers = new ArrayList<>();
        Customer customer = new Customer();
        customer.setFirstName("test");
        customers.add(customer);
        given(customerRepository.findAll()).willReturn(customers);
        List<Customer> expected = customerService.findAll();
        Assertions.assertEquals(expected,customers);

    }

    @Test
    void saveCustomer() {
        final Customer customer = new Customer();
        customer.setFirstName("test");
        customer.setFirstName("as");

        given(customerRepository.save(customer)).willReturn(customer);
        final Customer expected = customerService.saveCustomer(customer);
        Assertions.assertNotNull(expected);

        verify(customerRepository).save(any(Customer.class));

    }

    @Test
    void deleteById() {
        final Long customerId = 1L;
        customerService.deleteById(customerId);
        customerService.deleteById(customerId);

        verify(customerRepository, times(2)).deleteById(customerId);
    }
}