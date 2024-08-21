package com.example.ringofringsbackend.service;

import com.ringofrings.sdk.RingOfRings;
import org.springframework.stereotype.Service;

@Service
public class RingOfRingsService {
    private RingOfRings ringOfRings;

    public RingOfRingsService() {
        initializeRingOfRings();
    }

    private void initializeRingOfRings() {
        try {
            ringOfRings = RingOfRings.builder()
                                     .setApiKey("your-api-key") // Replace with your actual API key
                                     .setNetwork("mainnet") // Use "testnet" if testing
                                     .build();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String processSmartContract(String smartContractCode) {
        try {
            return ringOfRings.processContract(smartContractCode);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error processing smart contract";
        }
    }

    public String deploySmartContract(String processedContract) {
        try {
            return ringOfRings.deployContract(processedContract);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error deploying smart contract";
        }
    }
}
