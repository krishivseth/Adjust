import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function LogoutButton() {
  const handleLogout = () => {
    // Implement logout functionality
    console.log("Logging out...");
  };

  return (
    <TouchableOpacity
      onPress={handleLogout}
      activeOpacity={0.7}
      className="mt-4"
    >
      <View className="flex-row items-center bg-gray-50 p-4 rounded-xl">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/be955f1aa2a71d5b2c8df3f85e522777b7d352eb65eefe95e8ef1a22204f4638?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-5 h-5 mr-3"
        />
        <Text className="text-red-500 font-medium">log out</Text>
      </View>
    </TouchableOpacity>
  );
}

export default LogoutButton;
