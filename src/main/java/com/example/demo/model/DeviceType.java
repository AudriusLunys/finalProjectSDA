package com.example.demo.model;

import javax.persistence.*;

@Entity
public class DeviceType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long deviceTypeId;
    private String Type;
    @OneToOne
    private Device device;

    public DeviceType() {
    }

    public DeviceType(Long deviceTypeId, String type, Device device) {
        this.deviceTypeId = deviceTypeId;
        Type = type;
        this.device = device;
    }

    public Long getDeviceTypeId() {
        return deviceTypeId;
    }

    public void setDeviceTypeId(Long deviceTypeId) {
        this.deviceTypeId = deviceTypeId;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }
}
