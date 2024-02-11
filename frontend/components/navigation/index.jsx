import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Navigation({ text, to = "" }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="black"
        style={{ marginEnd: 10 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 19 }}>{text}</Text>
    </View>
  );
}
