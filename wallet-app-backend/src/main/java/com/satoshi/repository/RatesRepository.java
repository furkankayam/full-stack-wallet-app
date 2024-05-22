package com.satoshi.repository;

import com.satoshi.model.Rates;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatesRepository extends JpaRepository<Rates, Long> {
}
