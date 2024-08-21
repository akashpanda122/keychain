package com.example.ringofringsbackend.controller;

import com.example.ringofringsbackend.service.RingOfRingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/smartcontract")
public class SmartContractController {

    @Autowired
    private RingOfRingsService ringOfRingsService;

    @PostMapping("/generate")
    public String generateSmartContract(@RequestBody String userPrompt) {
        String smartContractCode = "Generated contract code based on: " + userPrompt; // Placeholder
        return ringOfRingsService.processSmartContract(smartContractCode);
    }

    @PostMapping("/deploy")
    public String deploySmartContract(@RequestBody String processedContract) {
        return ringOfRingsService.deploySmartContract(processedContract);
    }
}
