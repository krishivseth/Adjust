import * as React from "react";
import { View, Text } from "react-native";

const AdviceCard = ({ title, icon }) => {
  return (
    <View className="bg-gray-100 rounded-lg p-4 mb-3 flex-row items-center">
      <View className="mr-3">
        <Text className="text-2xl">{icon}</Text>
      </View>
      <Text className="text-lg font-medium text-gray-800">{title}</Text>
    </View>
  );
};

export default AdviceCard;
