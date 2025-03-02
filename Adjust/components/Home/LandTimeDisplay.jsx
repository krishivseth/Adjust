import * as React from "react";
import { View, Text } from "react-native";

const LandTimeDisplay = () => {
  return (
    <View className="bg-blue-50 rounded-lg p-4 mb-3">
      <Text className="text-lg font-medium text-gray-800 mb-1">land time</Text>
      <Text className="text-2xl font-bold text-blue-800">7:46 am</Text>
    </View>
  );
};

export default LandTimeDisplay;
