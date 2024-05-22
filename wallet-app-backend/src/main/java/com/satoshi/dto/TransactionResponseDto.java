package com.satoshi.dto;

import java.time.LocalDate;

public record TransactionResponseDto(
        Long amount,
        LocalDate transactionDate,
        String toWalletAddress
) {
}