package com.satoshi.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Furkan",
                        email = "furkan.36kaya@gmail.com",
                        url = "http://www.furkankaya.web.tr"
                ),
                title = "Book API",
                description = "Doing CRUD Operation",
                summary = "This book api will add, delete, create and update",
                version = "v1",
                license = @License(
                        name = "Your License No",
                        url = "url license"
                ),
                termsOfService = "T&C"
        ),
        servers = {
                @Server(
                        description = "LOCAL ENV",
                        url = "http://localhost:8080"
                )
        },

        security = @SecurityRequirement(
                name = "auth"
        )
)
@SecurityScheme(
        name = "auth",
        description = "security description",
        scheme = "bearer",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {
}
