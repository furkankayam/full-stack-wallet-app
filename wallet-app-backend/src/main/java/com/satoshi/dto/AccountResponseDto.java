package com.satoshi.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountResponseDto {

    private String wAddress;
    private Double amount;
    private List<TransactionResponseDto> transactionResponseDtos;
    private List<RatesResponseDto> ratesResponseDtos;

}
