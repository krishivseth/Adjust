import * as React from "react";
import { View, Image, Text } from "react-native";

function ProfileHeader() {
  return (
    <View className="flex-row items-center mb-6 mt-2">
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/42db5a21-396b-4b81-8d13-5b4817f9773f?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
        }}
        className="w-16 h-16 rounded-full mr-4"
      />
      <View className="flex-1">
        <Text className="text-xl font-bold text-gray-800">Kayla Thompson</Text>
      </View>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f09dce8af640fd46628579a0512477c526b8723e24ed50490e5dcb22602f1165?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
        }}
        className="w-6 h-6"
      />
    </View>
  );
}

export default ProfileHeader;
