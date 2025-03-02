import * as React from "react";
import { View, Text } from "react-native";

function ChatBubble({ message, isUser }) {
  return (
    <View
      className={`mb-4 max-w-[80%] ${isUser ? "self-end ml-auto" : "self-start mr-auto"}`}
    >
      <View
        className={`rounded-2xl px-4 py-3 ${
          isUser ? "bg-blue-500" : "bg-gray-100"
        }`}
      >
        <Text
          className={`${isUser ? "text-white" : "text-gray-800"} text-base`}
        >
          {message}
        </Text>
      </View>
    </View>
  );
}

export default ChatBubble;
