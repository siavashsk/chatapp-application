import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/Avatar.styles";
import { Image } from "expo-image";

const PALETTE = ["#4652b0", "#933880", "#3946a4", "#7965AF"];

interface AvatarProps {
  name: string;
  size?: number;
  online?: boolean;
  src?: string;
}

export default function Avatar({ name, size = 40, online, src }: AvatarProps) {
  const color = PALETTE[name.charCodeAt(0) % PALETTE.length];
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const indicatorSize = Math.round(size * 0.28);

  return (
    <View style={[styles.root, { width: size, height: size }]}>
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: src ? "transparent" : color,
          },
        ]}
      >
        {src ? (
          <Image
            source={{ uri: src }}
            style={{ width: size, height: size, borderRadius: size / 2 }}
          />
        ) : (
          <Text style={[styles.initials, { fontSize: size * 0.38 }]}>
            {initials}
          </Text>
        )}
      </View>
      {online !== undefined && (
        <View
          style={[
            styles.indicator,
            {
              width: indicatorSize,
              height: indicatorSize,
              borderRadius: indicatorSize / 2,
              backgroundColor: online ? "#22c55e" : "#abadae",
              bottom: 0,
              right: 0,
            },
          ]}
        />
      )}
    </View>
  );
}
