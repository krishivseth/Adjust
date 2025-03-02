import * as React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import TimeDisplay from "../TimeDisplay";
import AdviceCard from "../AdviceCard";
import EnergySection from "./EnergySection";
import DateDisplay from "./DateDisplay";
import LandTimeDisplay from "./LandTimeDisplay";

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        {/* Header Images */}
        <View className="mb-4">
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a77e95361901f50a4f467799bf6f86f83eec3f9793ca8182473caf6cd580125a?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-20 mb-2"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a5da3d0a8af2b7f3fbed4ff44fb5a4f41c5c0edacdf6461004e642b3a34c775?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-20 mb-2"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb925be6e5f0bf7210076eac3304d1974b0b8f2794fbd62e8f4d7a3cd2dbff03?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-20 mb-2"
            resizeMode="contain"
          />
        </View>

        {/* Time Section */}
        <View className="mb-6">
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0147b095c8774cccf8b26dd3bbaab3c6f82a9be7cc536963c5028eed76296614?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d3b1d97ce3e51841bb968f6c0ae2fb5fb0ecfac35d3317089f651a53f25a2a4?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <TimeDisplay />
        </View>

        {/* Advice Section */}
        <View className="mb-6">
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b28a668a3e50dd88c01957c8f4c202788b3dee92091d6710293a1964d0173c44?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eea50e12385fbe2887aef615d20ef7cc2f8b25263da920c241799878f1e8dfc7?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold mb-4">Good Morning</Text>
          <AdviceCard title="avoid caffeine" icon="☕ ️❌" />
          <AdviceCard title="get some bright light!" icon="☀️" />
          <AdviceCard title="seek bright light" icon="☀️" />
        </View>

        {/* Land Time Section */}
        <View className="mb-6">
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4887fdaa816eebac2968cc1069d2bf8fa493e503149a5dfd4e7465d7c904dcc?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <LandTimeDisplay />
        </View>

        {/* Date Section */}
        <View className="mb-6">
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3371105b0fd8c0d6aaa8adba899f4ef47ede020da6063e3f8d0598a4649e9a25?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <DateDisplay />
        </View>

        {/* Energy Cycle Section */}
        <View className="mb-6">
          <EnergySection />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/84cb1e7d5686574178d09e97ac3d344d6fcf2380fe235086177fca5bbf78ca3d?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eee577b0ee6a383a9dccf8e3bd2c7daa21c0d80378c24c8b6ae613efd5c15c91?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0616d6e4e65c1d1ef433e00be40c31bdc756163aeb88110631befad499455ac?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
            }}
            className="w-full h-16 mb-2"
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
