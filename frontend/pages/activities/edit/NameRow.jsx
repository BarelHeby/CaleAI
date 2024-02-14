import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialIcons } from "react-native-vector-icons";
export default function NameRow({ task }) {
  return (
    <View style={{ width: "100%", ...styles.row }}>
      <MaterialIcons
        name="title"
        size={styles.iconProps.size}
        color={styles.iconProps.color}
        style={styles.icon}
      />
      <View style={{ ...styles.container, alignItems: "center" }}>
        <TextInput
          style={styles.iconText}
          onChangeText={(t) => {
            //TODO
          }}
        >
          {task.name}
        </TextInput>
      </View>
    </View>
  );
}
