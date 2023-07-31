package com.example.demo.Contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Request;
import com.example.demo.Service.RequestService;

@RestController
@CrossOrigin
public class RequestController {
    RequestService requestService;

    @Autowired
    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/reqall")
    public List<Request> getAllRequests() {
        return requestService.getAllRequests();
    }

    @PostMapping("/reqdetails")
    public Request createRequest(@RequestBody Request request) {
        return requestService.saveRequest(request);
    }
}