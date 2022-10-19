package com.record;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class EmploymentRecordServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmploymentRecordServiceApplication.class, args);
	}

}
