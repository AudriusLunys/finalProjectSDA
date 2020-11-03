package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="devicetype")
public class DeviceType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String type;
    @OneToOne
    private Device device;

    public DeviceType() {
    }

    public DeviceType(Long id, String type, Device device) {
        Id = id;
        this.type = type;
        this.device = device;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }
}

