package com.csperry.lifecoupled.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class hello {

    @GetMapping("/api/hello")
    public String helloMessage() {
        return "Hello from the backend.";
    }
}