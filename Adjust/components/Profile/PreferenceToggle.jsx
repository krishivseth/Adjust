import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function PreferenceToggle({ label, value, onToggle, icon }) {
  return (
    <View className="flex-row items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
      <View className="flex-row items-center">
        <Image source={{ uri: icon }} className="w-5 h-5 mr-3" />
        <Text className="text-gray-700">{label}</Text>
      </View>

      <TouchableOpacity onPress={onToggle} activeOpacity={0.8}>
        <View
          className={`w-10 h-6 rounded-full px-1 flex items-center justify-center ${value ? "bg-blue-500" : "bg-gray-300"}`}
        >
          <View
            className={`w-4 h-4 rounded-full bg-white shadow-sm ${value ? "ml-4" : "mr-4"}`}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PreferenceToggle;
