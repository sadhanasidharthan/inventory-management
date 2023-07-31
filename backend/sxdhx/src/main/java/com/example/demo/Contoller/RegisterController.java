package com.example.demo.Contoller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.HomeData;
import com.example.demo.Entity.Register;
import com.example.demo.Service.RegisterService;

@RestController
@CrossOrigin
@RequestMapping
public class RegisterController {
	@Autowired
	 RegisterService stuService;
	 @PostMapping("/addDetails")
	 public Register addinfo(@RequestBody Register st) {
		 return stuService.saveDetails(st);
	 }
	 @GetMapping("fetch")
	 public List<Register> fetchDetails(){
		 return stuService.getDetails();
	 }
	 public RegisterController(RegisterService registerService) {
	        this.stuService = registerService;
	    }	

	 @GetMapping("/emailandpassword")
	    public List<Map<String, Object>> getEmailAndPassword() {
	        return stuService.getEmailAndPassword();
	    }
	 @PostMapping("/add")
	 public HomeData addinfo1(@RequestBody HomeData st1) {
		 return stuService.save(st1);
	 }
	/*  @GetMapping("/combined-results")
	    public List<Object[]> getCombinedResults() {
	        return stuService.getCombinedResults();
	    }*/
	public RegisterController() {
	}
	 
}
