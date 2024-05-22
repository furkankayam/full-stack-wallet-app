package com.satoshi.dto;

import com.satoshi.model.Role;
import lombok.*;

import java.util.Set;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResponse {

    private String first_name;
    private String password_restart_hash;

}
