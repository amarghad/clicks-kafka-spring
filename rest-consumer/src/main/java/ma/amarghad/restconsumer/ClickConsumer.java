package ma.amarghad.restconsumer;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ClickConsumer {
    private final Map<String, Long> clickCounts;

    public ClickConsumer() {
        this.clickCounts = new HashMap<>();
    }

    @KafkaListener(topics = "click-counts", groupId = "click-counts")
    public void consume(ConsumerRecord<String, Long> record) {
        clickCounts.put(record.key(), record.value());
    }

    public long getTotalClicks(String userId) {
        return clickCounts.getOrDefault(userId, 0L);
    }
}
