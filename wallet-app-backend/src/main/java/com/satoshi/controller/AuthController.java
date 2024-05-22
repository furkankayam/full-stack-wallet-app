package com.satoshi.controller;

import com.satoshi.dto.*;
import com.satoshi.service.JwtService;
import com.satoshi.service.RatesService;
import com.satoshi.service.TransferService;
import com.satoshi.service.UserDetailsServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserDetailsServiceImpl userService;
    private final TransferService transferService;
    private final RatesService ratesService;

    @PostMapping("/generateToken")
    public JwtResponseDto AuthenticateAndGetToken(@RequestBody AuthRequestDto request){

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getTc(), request.getPassword()));

        if(authentication.isAuthenticated()){
            return JwtResponseDto.builder()
                    .accessToken(jwtService.GenerateToken(request.getTc()))
                    .build();
        }

        log.info("invalid username " + request.getTc());

        throw new UsernameNotFoundException("invalid username {} " + request.getTc());
    }

    @PostMapping("/restartPassword")
    public RestartPasswordDto restartPassword(@RequestBody UserResetPassword userResetPassword){
        return userService.restartPassword(
                        userResetPassword.tc(),
                        userResetPassword.hash(),
                        userResetPassword.newPassword()
        );
    }

    @PostMapping("/save")
    public ResponseEntity<UserResponse> saveUser(@RequestBody CreateUserRequest userRequest) {

        UserResponse userResponse = userService.createUser(userRequest);
        return new ResponseEntity<>(userResponse, HttpStatus.OK);

    }

    @PostMapping("/addAmount")
    public void addAmount(HttpServletRequest httpServletRequest,
                          @RequestBody UpdateAmount updateAmount) {
        userService.addAmount(httpServletRequest, updateAmount);
    }

    @PostMapping("/sendMoney")
    public void sendMoney(HttpServletRequest httpServletRequest,
                          @RequestBody MoneySendDto moneySendDto) {
        transferService.sendAmount(httpServletRequest, moneySendDto);
    }

    @PostMapping("/sendRates")
    public void sendMoney(HttpServletRequest httpServletRequest,
                          @RequestBody CreateRatesDto createRatesDto) {
        ratesService.setRates(httpServletRequest, createRatesDto);
    }

    @GetMapping("/homeView")
    public AccountResponseDto homeView(HttpServletRequest httpServletRequest) {
        return ratesService.home(httpServletRequest);
    }

}