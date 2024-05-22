package com.satoshi.service;

import com.satoshi.dto.MoneySendDto;
import com.satoshi.model.Account;
import com.satoshi.model.Transaction;
import com.satoshi.model.User;
import com.satoshi.repository.AccountRepository;
import com.satoshi.repository.TransactionRepository;
import com.satoshi.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class TransferService {

    private final TransactionRepository transactionRepository;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final AccountRepository accountRepository;

    @Transactional
    public void sendAmount(HttpServletRequest httpServletRequest, MoneySendDto moneySendDto) {

        String tc = jwtService.resolveTc(httpServletRequest);

        User user = userRepository.findByTc(tc);

        Account account = accountRepository.findByUser(user);

        if (account.getBalance() > 0 && moneySendDto.amount() <= account.getBalance() && accountRepository.findByWalledAddress(moneySendDto.wAddress()) != null) {

            account.setBalance(account.getBalance() - moneySendDto.amount());
            accountRepository.save(account);

            Account sendToAccount = accountRepository.findByWalledAddress(moneySendDto.wAddress());
            sendToAccount.setBalance(sendToAccount.getBalance() + moneySendDto.amount());
            accountRepository.save(sendToAccount);

            Transaction transaction = new Transaction();
            transaction.setAmount(moneySendDto.amount());
            transaction.setToWalletAddress(moneySendDto.wAddress());
            transaction.setAccount(account);
            transaction.setTransactionDate(LocalDate.now());
            transactionRepository.save(transaction);

        } else {
            throw new RuntimeException("Insufficient Balance.");
        }

    }

}
