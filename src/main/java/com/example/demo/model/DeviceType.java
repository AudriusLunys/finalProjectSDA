package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class DeviceType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String type;
    @OneToMany
    private List<Device> deviceList;

    public DeviceType() {
    }

    public DeviceType(Long id, String type, List<Device> deviceList) {
        Id = id;
        this.type = type;
        this.deviceList = deviceList;
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

    public List<Device> getDeviceList() {
        return deviceList;
    }

    public void setDeviceList(List<Device> deviceList) {
        this.deviceList = deviceList;
    }
}

