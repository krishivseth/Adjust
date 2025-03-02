import * as React from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

function ChatInput({ value, onChangeText, onSend }) {
  const handleSend = () => {
    if (value.trim()) {
      onSend(value);
    }
  };

  return (
    <View className="px-4 py-2 flex-row items-center border-t border-gray-200">
      <View className="flex-row items-center flex-1 bg-gray-100 rounded-full px-4 py-2">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/47a87cc27494e17aaf33fd4e1d98c69ad3f609bd3836b7953d7f14d928e4041f?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-5 h-5 mr-2"
        />
        <TextInput
          className="flex-1 text-base text-gray-800"
          placeholder="Ask..."
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          multiline
        />
        <TouchableOpacity onPress={handleSend}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8ab72576ef152a21fdcd6ac54ab466d67db30bc34201d45b44dafca4036b466?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="ml-2">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb143062a77e502b3be592e56112d6df5fa5fabf02917f8299e941b89398aa18?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-6 h-6"
        />
      </TouchableOpacity>
    </View>
  );
}

export default ChatInput;
