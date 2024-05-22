package com.satoshi.dto;

public record MoneySendDto(
        String wAddress,
        Long amount
) {
}
