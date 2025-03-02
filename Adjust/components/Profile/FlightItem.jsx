import * as React from "react";
import { View, Text, Image } from "react-native";

function FlightItem({ route, date, icon }) {
  return (
    <View className="flex-row items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
      <View className="flex-row items-center">
        <Image source={{ uri: icon }} className="w-5 h-5 mr-3" />
        <Text className="text-gray-700">{route}</Text>
      </View>
      <Text className="text-gray-500">{date}</Text>
    </View>
  );
}

export default FlightItem;
