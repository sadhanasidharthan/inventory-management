package com.example.demo.Contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.HomeData;
import com.example.demo.Service.DataComparisonService;

@RestController
@CrossOrigin 
public class DataComparisonController {
    private final DataComparisonService dataComparisonService;

    @Autowired
    public DataComparisonController(DataComparisonService dataComparisonService) {
        this.dataComparisonService = dataComparisonService;
    }

    @GetMapping("/homeDataWithNames")
    public List<HomeData> getAllHomeDataWithNames() {
        return dataComparisonService.getAllHomeDataWithNames();
    }
}

