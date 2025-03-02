import * as React from "react";
import { TouchableOpacity, Text } from "react-native";

function ChatSuggestion({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2"
    >
      <Text className="text-gray-800 text-sm">{text}</Text>
    </TouchableOpacity>
  );
}

export default ChatSuggestion;
