package com.tsfintech.tbp.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.tsfintech.tbp.core.CoreConfig;

@SpringBootApplication
@Import(CoreConfig.class)
public class WebMain {

    public static void main(String[] args) {
        SpringApplication.run(WebMain.class, args);
    }

}
