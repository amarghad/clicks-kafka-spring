package ma.amarghad.restconsumer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("clicks")
public class ClickCountController {

    private final ClickConsumer clickConsumer;

    public ClickCountController(ClickConsumer clickConsumer) {
        this.clickConsumer = clickConsumer;
    }

    @GetMapping("count")
    public Map<String, Long> getClickCount(@RequestParam String userId) {
        return Map.of("clicks", clickConsumer.getTotalClicks(userId));
    }
}