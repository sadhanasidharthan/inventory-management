package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.HomeData;
import com.example.demo.Entity.Register;
import com.example.demo.Repository.HomeDataRepository;
import com.example.demo.Repository.RegisterRepository;

@Service
public class DataComparisonService {
    private final RegisterRepository registerRepository;
    private final HomeDataRepository homeDataRepository;

    @Autowired
    public DataComparisonService(RegisterRepository registerRepository, HomeDataRepository homeDataRepository) {
        this.registerRepository = registerRepository;
        this.homeDataRepository = homeDataRepository;
    }

    public Register findRegisterByPhone(String phone) {
        return registerRepository.findByPhone(phone);
    }

    public List<HomeData> getAllHomeDataWithNames() {
        List<HomeData> homeDataList = homeDataRepository.findAll();

        for (HomeData homeData : homeDataList) {
            Register register = registerRepository.findByPhone(homeData.getContactNumber());
            if (register != null) {
                homeData.setFirstName(register.getFirstName());
                homeData.setLastName(register.getLastName());
            }
        }

        return homeDataList;
    }
}
