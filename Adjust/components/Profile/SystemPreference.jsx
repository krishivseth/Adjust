import * as React from "react";
import { View, Text, Image } from "react-native";
import PreferenceToggle from "./PreferenceToggle";

function SystemPreferences() {
  const [autoDisplay, setAutoDisplay] = React.useState(true);
  const [notifications, setNotifications] = React.useState(false);

  return (
    <View className="mb-6">
      <View className="flex-row items-center mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          System Preferences
        </Text>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/559b36379f9066b2ad144da5f3fd0c1246b4dc49aa500339e3058ca9d4b53c4b?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-5 h-5 ml-2"
        />
      </View>

      <View className="bg-gray-50 rounded-xl p-3">
        <PreferenceToggle
          label="auto display adjustments"
          value={autoDisplay}
          onToggle={() => setAutoDisplay(!autoDisplay)}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5bb08a8f81642e89e00bde5d7a917eaba93a33013ad8efc3d2894617d9e7540b?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9"
        />

        <PreferenceToggle
          label="allow tip notifications"
          value={notifications}
          onToggle={() => setNotifications(!notifications)}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/84cb1e7d5686574178d09e97ac3d344d6fcf2380fe235086177fca5bbf78ca3d?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9"
        />
      </View>
    </View>
  );
}

export default SystemPreferences;
