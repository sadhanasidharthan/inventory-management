package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Request;

public interface RequestRepository extends JpaRepository<Request, Integer> {
}

