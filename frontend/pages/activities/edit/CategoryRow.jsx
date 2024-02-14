import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Activities from "../../../assets/Activities";
import { Picker } from "react-native-wheel-pick";
import styles from "./styles";
import { MaterialIcons } from "react-native-vector-icons";

export default function CategoryRow({ task, openExetntion, setOpenExetntion }) {
  return (
    <View style={{ width: "100%", ...styles.row }}>
      <MaterialIcons
        name="category"
        size={styles.iconProps.size}
        color={styles.iconProps.color}
        style={styles.icon}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() =>
            setOpenExetntion((prev) =>
              prev === "category" ? null : "category"
            )
          }
        >
          <Text style={styles.iconText}>{Activities[task.category].emoji}</Text>
          <Text style={styles.text}>{task.category}</Text>
        </TouchableOpacity>
        <Picker
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 150,
            display: openExetntion === "category" ? "flex" : "none",
            overflow: "hidden",
          }}
          selectedValue={task.category}
          pickerData={Object.keys(Activities)}
          onValueChange={(value) => {
            // TODO
            console.log(value);
          }}
        />
      </View>
    </View>
  );
}
