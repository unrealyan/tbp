package com.tsfintech.tbp.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.tsfintech.tbp.core.CoreConfig;

@SpringBootApplication
@Import(CoreConfig.class)
public class ApiMain {

    public static void main(String[] args) {
        SpringApplication.run(ApiMain.class, args);
    }

}
