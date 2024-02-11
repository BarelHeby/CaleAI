import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function TextBox({
  placeholder,
  isAvailable,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry = false,
  style = {},
}) {
  return (
    <View>
      <TextInput
        style={{
          ...style,
          height: 40,
          borderColor:
            isAvailable === true
              ? "green"
              : isAvailable === false
              ? "red"
              : "transparent",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
          borderRadius: 10,
          width: "100%",
          fontSize: 20,
        }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
