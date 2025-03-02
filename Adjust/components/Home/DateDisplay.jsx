import * as React from "react";
import { View, Text } from "react-native";

const DateDisplay = () => {
  return (
    <View className="bg-gray-50 rounded-lg p-4 mb-3">
      <Text className="text-xl font-semibold text-gray-800 mb-1">
        Tuesday September 21
      </Text>
      <View className="flex-row items-center">
        <Text className="text-2xl mr-2">☀️</Text>
        <Text className="text-gray-600">Sunny day ahead</Text>
      </View>
    </View>
  );
};

export default DateDisplay;
