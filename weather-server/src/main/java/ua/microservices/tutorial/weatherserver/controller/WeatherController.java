package ua.microservices.tutorial.weatherserver.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/weather")
public class WeatherController {

    @Value("${weather.key}")
    private String appId;

    @GetMapping("/info/{city}")
    public ResponseEntity getWeather(@PathVariable String city) {
        RestTemplate restTemplate = new RestTemplate();
        String fooResourceUrl
                = String.format("%s%s","http://api.openweathermap.org/data/2.5/weather?units=metric&q=city&appid=",appId);
        ResponseEntity<String> response
                = restTemplate.getForEntity(fooResourceUrl, String.class);
        return ResponseEntity.ok(response.getBody());
    }
}
