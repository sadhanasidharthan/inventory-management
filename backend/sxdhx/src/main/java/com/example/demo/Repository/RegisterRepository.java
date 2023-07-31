package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Integer> {
    Register findByPhone(String phone);
}
