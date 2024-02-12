import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ text, onPress, style }) {
  return (
    <TouchableOpacity
      style={{
        ...style,
        backgroundColor: style?.backgroundColor
          ? style.backgroundColor
          : "#5F33E1",
        borderRadius: 10,
        padding: style?.padding ? style.padding : 15,
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 10 },
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: style?.color ? style.color : "white",
          marginStart: "auto",
          marginEnd: "auto",
          fontSize: 19,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
