import * as React from "react";
import { View, Text, Image } from "react-native";
import FlightItem from "./FlightItem";

function UpcomingFlights() {
  const flights = [
    {
      id: 1,
      route: "Lisbon --> San Diego",
      date: "3/17",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbb59c3349595381ef032c422fb9970d5cd309bc1a1c0883ab48962998a61305?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    },
    {
      id: 2,
      route: "LA --> New York",
      date: "3/27",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbb59c3349595381ef032c422fb9970d5cd309bc1a1c0883ab48962998a61305?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    },
    {
      id: 3,
      route: "Newark --> Hong Kong",
      date: "4/3",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbb59c3349595381ef032c422fb9970d5cd309bc1a1c0883ab48962998a61305?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    },
  ];

  return (
    <View className="mb-6">
      <View className="flex-row items-center mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          Upcoming Flights
        </Text>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c5a5115dedef453622c1972ce7842e500956e61590d7dd38948cd3f5c659cab?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-5 h-5 ml-2"
        />
      </View>

      <View className="bg-gray-50 rounded-xl p-3">
        {flights.map((flight) => (
          <FlightItem
            key={flight.id}
            route={flight.route}
            date={flight.date}
            icon={flight.icon}
          />
        ))}
      </View>
    </View>
  );
}

export default UpcomingFlights;
