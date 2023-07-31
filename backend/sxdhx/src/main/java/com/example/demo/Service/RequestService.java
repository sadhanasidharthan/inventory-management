package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Request;
import com.example.demo.Repository.RequestRepository;

@Service
public class RequestService {
	RequestRepository requestRepository;

    @Autowired
    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request saveRequest(Request request) {
        return requestRepository.save(request);
    }

    // Additional methods for business logic can be defined here
}