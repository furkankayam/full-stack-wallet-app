package com.satoshi.dto;

import lombok.Data;

public record UserResetPassword(
    String tc,
    String hash,
    String newPassword
) {
}
