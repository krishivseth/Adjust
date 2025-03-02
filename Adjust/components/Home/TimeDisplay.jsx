import * as React from "react";
import { View, Text } from "react-native";

const TimeDisplay = () => {
  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-medium text-gray-800">8 am</Text>
        <Text className="text-sm text-gray-600">current time: 8:03 am EST</Text>
        <Text className="text-lg font-medium text-gray-800">9 am</Text>
      </View>
    </View>
  );
};

export default TimeDisplay;
