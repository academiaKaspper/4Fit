package com.fit.documentation;

import org.apache.catalina.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;



@Configuration
public class OpenAPIConfig {
	
		
		@Value("${fourfit.openapi.dev-url}")
		public String devUrl;
		
		@Bean
		public OpenAPI myOpenAPI() {
			Server devServ = new Server();
			devServ.setUrl(devUrl);
			devServ.setDescription("URL de desenvolvimento");
			
			
			Contact contato = new Contact();
			contato.setEmail("4fit@gmail.com");
			contato.setName("4Fit");
			contato.setUrl("Em Breve");


			ProcessHandle.Info info = new Info()
					.title("API da academia 4Fit")
					.version("1.0")
					.contact(contato)
					.description("API para endpoints da academia 4Fit");
			
			return new OpenAPI()
					.info(info)
					.servers(List.of(devServ));
		}

}