import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Materialized;

import java.util.Properties;

public class App {

    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("application.id", "clicks-counter");
        props.put("auto.offset.reset", "earliest");
        props.put("default.key.serde", Serdes.String().getClass());
        props.put("default.value.serde", Serdes.String().getClass());

        StreamsBuilder builder = new StreamsBuilder();

        KStream<String, Long> clicks = builder.stream("clicks");

        KStream<String, Long> total = clicks.groupByKey()
                .count(Materialized.as("click-count-store"))
                .toStream();
        total.foreach((userId, count) -> System.out.printf("User %s has clicked %d times\n", userId, count));
        total.to("click-counts");

        KafkaStreams streams = new KafkaStreams(builder.build(), props);
        streams.setStateListener((newState, oldState) -> System.out.printf("State changed from %s to %s\n", oldState, newState));
        streams.start();
        Runtime.getRuntime().addShutdownHook(new Thread(streams::close));
    }

}
