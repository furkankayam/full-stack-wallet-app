package com.satoshi.repository;

import com.satoshi.model.Account;
import com.satoshi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {

    Account findByUser(User user);
    Account findByWalledAddress(String walletAddress);

}
