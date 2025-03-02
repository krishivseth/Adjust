import React from "react";
import { View, Image, ScrollView } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

/**
 * Add component that displays a collection of images
 */
const Add = () => {
  // Array of image URLs for cleaner rendering
  const imageUrls = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3d33c6266c67e0ea7a30d7e1e50a624049912f6b37f2faf69f564e943aff594a?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/708862189d191be613776eab8f0d4e851595ff88dfd0af19549d069b3ede28ed?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/eee577b0ee6a383a9dccf8e3bd2c7daa21c0d80378c24c8b6ae613efd5c15c91?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b0616d6e4e65c1d1ef433e00be40c31bdc756163aeb88110631befad499455ac?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/5bb08a8f81642e89e00bde5d7a917eaba93a33013ad8efc3d2894617d9e7540b?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/bac7e20b38a6d4006f1fb2831c386385bf2ff487bd2f56626fa9390cb9fd50ed?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/544b60ba836643a0cdb63e979e54ef2f3fde9925a35d280a2b0f67ecee6f0b9f?placeholderIfAbsent=true&apiKey=1ef9fde97c2c4fccaae74e2424b66ba9",
  ];

  return (
    <StyledView className="flex-1 bg-white">
      <StyledScrollView
        className="flex-1 p-4"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <StyledView className="flex flex-row flex-wrap justify-between">
          {imageUrls.map((url, index) => (
            <ImageItem key={index} url={url} />
          ))}
        </StyledView>
      </StyledScrollView>
    </StyledView>
  );
};

/**
 * Individual image item component
 */
const ImageItem = ({ url }) => {
  return (
    <StyledView className="w-[48%] aspect-square mb-4 rounded-lg overflow-hidden">
      <StyledImage
        source={{ uri: url }}
        className="w-full h-full"
        resizeMode="cover"
      />
    </StyledView>
  );
};

export default Add;
