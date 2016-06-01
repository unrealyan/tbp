package com.tsfintech.tbp.core;

import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tsfintech.tbp.core.json.ObjectMapperBeanFactory;

@Configuration
@ComponentScan
@EnableJpaRepositories
@EntityScan("com.tsfintech.tbp.core.model")
public class CoreConfig {

    @Bean
    public ObjectMapper objectMapper() {
        return ObjectMapperBeanFactory.getObjectMapper();
    }

}
