package com.example.demo.Repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Register;

@Repository

	public interface RegisterRepo extends JpaRepository<Register, Integer> {
	    @Query("SELECT r.email AS email, r.password AS password FROM Register r")
	    List<Map<String, Object>> getEmailAndPassword();
	}

