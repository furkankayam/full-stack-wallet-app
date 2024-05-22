package com.satoshi.repository;

import com.satoshi.model.WalletAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletAddressRepository extends JpaRepository<WalletAddress, Long> {
    WalletAddress findByWalletAddress(String address);
}
