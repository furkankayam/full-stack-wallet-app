package com.satoshi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.satoshi.model.Role;
import lombok.Data;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Data
public class CreateUserRequest{

    private String first_name;
    private String last_name;
    private String email;
    private String tc;
    private LocalDate birth_day;
    private String password;
    private Set<Role> authorities;

    @JsonIgnore
    private String password_restart_hash = String.valueOf(UUID.randomUUID());

}