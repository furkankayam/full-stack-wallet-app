package com.satoshi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "rates")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Rates {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    private Integer pack;

    private Double amount;

    private Double newAmount;

    @Column(name = "create_date")
    private LocalDate createDate;

}
