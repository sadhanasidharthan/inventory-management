package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.HomeData;

@Repository
public interface HomeDataRepository extends JpaRepository<HomeData, Integer> {
    HomeData findByContactNumber(String contactNumber);
}

