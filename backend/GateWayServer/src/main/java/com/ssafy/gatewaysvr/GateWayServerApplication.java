package com.ssafy.gatewaysvr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class GateWayServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GateWayServerApplication.class, args);
	}

}
