package ma.amarghad.webproducer;

import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ClicksController {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public ClicksController(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @GetMapping("/click")
    public void recordClick(@RequestParam String userId) {
        kafkaTemplate.send("clicks", userId, "click");
    }
}
