package com.satoshi.dto;

import java.time.LocalDate;

public record RatesResponseDto(
        Integer pack,
        Double amount,
        Double newAmount,
        LocalDate createDate,
        LocalDate endDate
) {
}
