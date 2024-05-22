package com.satoshi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private JavaMailSender mailSender;

    @Autowired
    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public String sendMutliMediaMail() {
        return null;
    }

    public void sendMail(String email) {
       SimpleMailMessage message = new SimpleMailMessage();
       message.setFrom("wallet.app36@gmail.com");
       message.setTo(email);
       message.setSubject("Wallet App");
       message.setText("Welcome to Wallet App.🙌");
       mailSender.send(message);
    }

}
