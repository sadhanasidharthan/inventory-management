package com.example.demo.Service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.HomeData;
import com.example.demo.Entity.Register;
import com.example.demo.Repository.ClassRepo;
import com.example.demo.Repository.RegisterRepo;
@Service
public class RegisterService {
	@Autowired
	RegisterRepo stRepo;
																																																																																																				
	@Autowired
	ClassRepo crepo;
	
	public Register saveDetails(Register e) {
		return stRepo.save(e);
	}
	
	public List<Register> getDetails() {
		return stRepo.findAll();
	}
	
	public List<Map<String, Object>> getEmailAndPassword() {
	    return stRepo.getEmailAndPassword();       
	}
	
	public HomeData save(HomeData e1) {
		return crepo.save(e1);
	}
	
	
}
