package com.satoshi.repository;

import com.satoshi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByTc(String tc);

}
