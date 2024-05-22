package com.satoshi.dto.converter;

import com.satoshi.dto.RatesResponseDto;
import com.satoshi.dto.TransactionResponseDto;
import com.satoshi.model.Rates;
import com.satoshi.model.Transaction;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class RatesConverter {

    public List<RatesResponseDto> convertToDto(List<Rates> rates) {
        List<RatesResponseDto> ratesResponseDtos = new ArrayList<>();
        for (Rates rate : rates) {
            RatesResponseDto ratesResponseDto = new RatesResponseDto(
                    rate.getPack(),
                    rate.getAmount(),
                    rate.getNewAmount(),
                    rate.getCreateDate(),
                    rate.getCreateDate().plusDays(rate.getPack() * 30)
            );
            ratesResponseDtos.add(ratesResponseDto);
        }
        return ratesResponseDtos;
    }

}
