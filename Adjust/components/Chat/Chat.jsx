import * as React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import ChatSuggestion from "./ChatSuggestion";

function Chat() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      text: "I really feel like I need to nap, should I?",
      isUser: true,
    },
    {
      id: 2,
      text: "If you need to nap, it would be best to do so for no more than 30 minutes, in a hour from now",
      isUser: false,
    },
    { id: 3, text: "what should I have for dinner?", isUser: true },
    {
      id: 4,
      text: "Aim for a lot of carbs, and some protein - something like pasta with meat sauce is a good idea!",
      isUser: false,
    },
  ]);

  const [inputText, setInputText] = React.useState("");

  const handleSendMessage = (text) => {
    if (text.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: text,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputText("");

    // Simulate assistant response (in a real app, this would be an API call)
    setTimeout(() => {
      const assistantMessage = {
        id: messages.length + 2,
        text: "I'm your assistant. I'll help you with that question.",
        isUser: false,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-12 pb-4 px-4 bg-white border-b border-gray-200 flex-row justify-between items-center">
        <Text className="text-xl font-semibold text-gray-800">
          Ask Your Assistant
        </Text>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bb08a8f81642e89e00bde5d7a917eaba93a33013ad8efc3d2894617d9e7540b?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-6 h-6"
        />
      </View>

      {/* Chat messages */}
      <ScrollView
        className="flex-1 px-4 pt-4"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
      </ScrollView>

      {/* Suggestions */}
      <View className="px-4 mb-4">
        <Text className="text-sm font-medium text-gray-500 mb-2">
          Suggestions
        </Text>
        <View className="flex-row flex-wrap">
          <ChatSuggestion
            text="Ask..."
            onPress={() => handleSendMessage("Tell me something interesting")}
          />
          <ChatSuggestion
            text="I really feel like I need to nap, should I?"
            onPress={() =>
              handleSendMessage("I really feel like I need to nap, should I?")
            }
          />
          <ChatSuggestion
            text="what should I have for dinner?"
            onPress={() => handleSendMessage("what should I have for dinner?")}
          />
        </View>
      </View>

      {/* Input area */}
      <ChatInput
        value={inputText}
        onChangeText={setInputText}
        onSend={handleSendMessage}
      />

      {/* Bottom icons */}
      <View className="flex-row justify-between items-center px-6 py-4 bg-white border-t border-gray-200">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0616d6e4e65c1d1ef433e00be40c31bdc756163aeb88110631befad499455ac?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-6 h-6"
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/84cb1e7d5686574178d09e97ac3d344d6fcf2380fe235086177fca5bbf78ca3d?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
          }}
          className="w-6 h-6"
        />
      </View>
    </View>
  );
}

export default Chat;
