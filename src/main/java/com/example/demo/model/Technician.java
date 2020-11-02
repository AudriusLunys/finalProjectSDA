package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Technician {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String telephoneNumber;
    private String email;
    @OneToMany
    private List<Device> repDeviceList;

    public Technician() {
    }

    public Technician(Long id, String firstName, String lastName, String telephoneNumber, String email, List<Device> repDeviceList) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.repDeviceList = repDeviceList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Device> getRepDeviceList() {
        return repDeviceList;
    }

    public void setRepDeviceList(List<Device> repDeviceList) {
        this.repDeviceList = repDeviceList;
    }
}
