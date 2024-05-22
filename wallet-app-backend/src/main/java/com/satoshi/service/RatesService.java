package com.satoshi.service;

import com.satoshi.dto.AccountResponseDto;
import com.satoshi.dto.CreateRatesDto;
import com.satoshi.dto.RatesResponseDto;
import com.satoshi.dto.TransactionResponseDto;
import com.satoshi.dto.converter.RatesConverter;
import com.satoshi.dto.converter.TransactionConverter;
import com.satoshi.model.Account;
import com.satoshi.model.Rates;
import com.satoshi.model.Transaction;
import com.satoshi.model.User;
import com.satoshi.repository.AccountRepository;
import com.satoshi.repository.RatesRepository;
import com.satoshi.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RatesService {

    private final RatesRepository ratesRepository;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final AccountRepository accountRepository;
    private final TransactionConverter transactionConverter;
    private final RatesConverter ratesConverter;

    public void setRates(HttpServletRequest httpServletRequest, CreateRatesDto createRatesDto) {

        String tc = jwtService.resolveTc(httpServletRequest);

        User user = userRepository.findByTc(tc);

        Account account = accountRepository.findByUser(user);

        if (account.getBalance() > 0 && createRatesDto.amount() <= account.getBalance()) {

            account.setBalance(account.getBalance() - createRatesDto.amount());

            accountRepository.save(account);

            Double newAmount = null;

            if (createRatesDto.amount() <= 250000.0) {
                if (createRatesDto.pack() == 3) {
                    newAmount =  createRatesDto.amount() + (((((createRatesDto.amount() * 40) / 100)) / 12) * 3);
                } else if (createRatesDto.pack() == 6) {
                    newAmount =  createRatesDto.amount() + (((((createRatesDto.amount() * 42) / 100)) / 12) * 6);
                } else if (createRatesDto.pack() == 12) {
                    newAmount =  createRatesDto.amount() + (((((createRatesDto.amount() * 45) / 100)) / 12) * 12);
                }
            } else {
                if (createRatesDto.pack() == 3) {
                    newAmount =  createRatesDto.amount() + (((((createRatesDto.amount() * 45) / 100)) / 12) * 3);
                } else if (createRatesDto.pack() == 6) {
                    newAmount =  createRatesDto.amount() + (((((createRatesDto.amount() * 47) / 100)) / 12) * 6);
                } else if (createRatesDto.pack() == 12) {
                    newAmount =  createRatesDto.amount() + (((((createRatesDto.amount() * 49) / 100)) / 12) * 12);
                }
            }

            Rates rates = new Rates();
            rates.setAccount(account);
            rates.setPack(createRatesDto.pack());
            rates.setAmount(createRatesDto.amount());
            rates.setCreateDate(LocalDate.now());
            rates.setNewAmount(newAmount);
            ratesRepository.save(rates);

        } else {
            throw new RuntimeException("Insufficient Balance.");
        }

    }

    @Transactional
    public AccountResponseDto home(HttpServletRequest httpServletRequest) {

        String tc = jwtService.resolveTc(httpServletRequest);

        User user = userRepository.findByTc(tc);

        Account account = accountRepository.findByUser(user);

        List<Transaction> transactions = account.getTransactions();

        List<Rates> rates = account.getRates();
        List<Rates> toBeDeleted = new ArrayList<>();

        for (Rates rate : rates) {
            LocalDate targetDate = rate.getCreateDate().plusDays(rate.getPack() * 30);
            if (targetDate.isBefore(LocalDate.now())) {
                account.setBalance(account.getBalance() + rate.getAmount());
                accountRepository.save(account);
                toBeDeleted.add(rate);
            }
        }

        ratesRepository.deleteAll(toBeDeleted);

        rates.removeAll(toBeDeleted);

        List<TransactionResponseDto> transactionResponseDtos = transactionConverter.convertToDto(transactions);
        List<RatesResponseDto> ratesResponseDtos = ratesConverter.convertToDto(rates);

        AccountResponseDto accountResponseDto = new AccountResponseDto();
        accountResponseDto.setWAddress(account.getWalledAddress());
        accountResponseDto.setRatesResponseDtos(ratesResponseDtos);
        accountResponseDto.setTransactionResponseDtos(transactionResponseDtos);
        accountResponseDto.setAmount(account.getBalance());

        return accountResponseDto;
    }


}
