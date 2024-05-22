package com.satoshi.dto.converter;

import com.satoshi.config.PasswordEncoderConfig;
import com.satoshi.dto.CreateUserRequest;
import com.satoshi.dto.TransactionResponseDto;
import com.satoshi.dto.UserResponse;
import com.satoshi.model.Transaction;
import com.satoshi.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class TransactionConverter {

    public List<TransactionResponseDto> convertToDto(List<Transaction> transactions) {
        List<TransactionResponseDto> dtos = new ArrayList<>();
        for (Transaction transaction : transactions) {
            TransactionResponseDto transactionResponseDto = new TransactionResponseDto(
                    transaction.getAmount(),
                    transaction.getTransactionDate(),
                    transaction.getToWalletAddress()
            );
            dtos.add(transactionResponseDto);
        }
        return dtos;
    }

}
