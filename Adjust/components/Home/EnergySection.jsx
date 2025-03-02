import * as React from "react";
import { View, Text } from "react-native";

const EnergySection = () => {
  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-medium text-gray-800">energy cycle</Text>
      </View>
      <View className="flex-row justify-around items-center mb-4">
        <View className="items-center">
          <Text className="text-3xl">☀️</Text>
          <Text className="text-sm text-gray-600">Morning</Text>
        </View>
        <View className="items-center">
          <Text className="text-3xl">☀️</Text>
          <Text className="text-sm text-gray-600">Afternoon</Text>
        </View>
        <View className="items-center">
          <Text className="text-3xl">🌙</Text>
          <Text className="text-sm text-gray-600">Evening</Text>
        </View>
      </View>
    </View>
  );
};

export default EnergySection;
