package com.satoshi.dto.converter;

import com.satoshi.config.PasswordEncoderConfig;
import com.satoshi.dto.CreateUserRequest;
import com.satoshi.dto.UserResponse;
import com.satoshi.model.User;
import com.satoshi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserConverter {

    private final PasswordEncoderConfig passwordEncoderConfig;
    private final UserRepository userRepository;

    public UserResponse toUserResponse(User user) {
        return UserResponse.builder()
                .first_name(user.getFirst_name())
                .password_restart_hash(user.getPassword_restart_hash())
                .build();
    }

    public User toUser(CreateUserRequest request) {
        User user = new User();
        user.setFirst_name(request.getFirst_name());
        user.setLast_name(request.getLast_name());
        user.setEmail(request.getEmail());
        user.setBirth_date(request.getBirth_day());
        user.setTc(request.getTc());
        user.setPassword_restart_hash(request.getPassword_restart_hash());
        user.setPassword(passwordEncoderConfig.passwordEncoder().encode(request.getPassword()));
        user.setAuthorities(request.getAuthorities());
        return user;
    }

}