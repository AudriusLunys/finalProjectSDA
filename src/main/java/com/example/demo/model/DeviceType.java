package com.example.demo.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class DeviceType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long deviceTypeId;
    private String Type;
}
