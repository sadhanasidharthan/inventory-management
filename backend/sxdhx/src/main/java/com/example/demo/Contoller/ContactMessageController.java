package com.example.demo.Contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.ContactMessage;
import com.example.demo.Service.ContactMessageService;

@RestController
@CrossOrigin
public class ContactMessageController {
    ContactMessageService contactMessageService;

    @Autowired
    public ContactMessageController(ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }

    @PostMapping("/submit")
    public ContactMessage submitContactForm(@RequestBody ContactMessage contactMessage) {
        // You can perform additional validation or processing here if needed
        return contactMessageService.saveContactMessage(contactMessage);
    }
}
