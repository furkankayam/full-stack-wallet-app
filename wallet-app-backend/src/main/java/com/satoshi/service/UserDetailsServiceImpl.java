package com.satoshi.service;

import com.satoshi.dto.CreateUserRequest;
import com.satoshi.dto.RestartPasswordDto;
import com.satoshi.dto.UpdateAmount;
import com.satoshi.dto.UserResponse;
import com.satoshi.dto.converter.UserConverter;
import com.satoshi.exception.PasswordRefreshException;
import com.satoshi.model.Account;
import com.satoshi.model.User;
import com.satoshi.model.WalletAddress;
import com.satoshi.repository.AccountRepository;
import com.satoshi.repository.UserRepository;
import com.satoshi.repository.WalletAddressRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.furkankayam.TCValidation;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Random;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    private final UserConverter userConverter;
    private final WalletAddressRepository walletAddressRepository;
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final MailService mailService;
    private final JwtService jwtService;

    @Override
    public UserDetails loadUserByUsername(String tc) throws UsernameNotFoundException {
        return userRepository.findByTc(tc);
    }

    @Transactional
    public UserResponse createUser(CreateUserRequest request) {

        // WalletAddress Create
        String newWalletAddress;

        do {
            newWalletAddress = randomWalletAddress();
        } while (walletAddressRepository.findByWalletAddress(newWalletAddress) != null);

        WalletAddress wa = new WalletAddress();
        wa.setWalletAddress(newWalletAddress);

        // WalletAddress Create

        User user = userConverter.toUser(request);

        Account account = new Account();
        account.setUser(user);
        account.setBalance(0.0);
        account.setWalledAddress(wa.getWalletAddress());

        String year = String.valueOf(request.getBirth_day().getYear());

        boolean tcValid = TCValidation.tcValidation(
                request.getTc(),
                request.getFirst_name(),
                request.getLast_name(),
                year
        );

        if (tcValid) {
            userRepository.save(user);
            walletAddressRepository.save(wa);
            accountRepository.save(account);
            mailService.sendMail(user.getEmail());
        } else {
            throw new UsernameNotFoundException(request.getFirst_name() + " wrong user!");
        }

        return userConverter.toUserResponse(user);
    }

    private static String randomWalletAddress(){
        Random rastgele = new Random();

        while (true) {
            int sayi = rastgele.nextInt(100000);
            if (sayi != 0) {
                return "w-" + sayi;
            }
        }
    }

    public RestartPasswordDto restartPassword(String tc, String hash, String newPassword) {

        RestartPasswordDto restartPasswordDto = new RestartPasswordDto();

        String newHash = String.valueOf(UUID.randomUUID());

        User user = userRepository.findByTc(tc);

        if (user.getPassword_restart_hash().equals(hash)){
            user.setPassword(passwordEncoder.encode(newPassword));
            user.setPassword_restart_hash(newHash);
            restartPasswordDto.setNewHash(newHash);
            userRepository.save(user);
            return restartPasswordDto;
        } else {
            throw new PasswordRefreshException("The information entered does not match!");
        }

    }

    @Transactional
    public void addAmount(HttpServletRequest httpServletRequest, UpdateAmount updateAmount) {

        String tc = jwtService.resolveTc(httpServletRequest);

        User user = userRepository.findByTc(tc);

        Account account = accountRepository.findByUser(user);

        account.setBalance(account.getBalance() + updateAmount.getAmount());

        accountRepository.save(account);

    }

}