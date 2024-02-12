import { View, StyleSheet } from "react-native";
import { Picker } from "react-native-wheel-pick";
import React, { useState } from "react";
import Button from "../../../components/Button";
export default function HoursPicker({ text, onChange }) {
  const times = Array.from({ length: 24 }, (_, i) => i).flatMap((hour) =>
    ["00", "15", "30", "45"].map(
      (minute) => `${hour.toString().padStart(2, "0")}:${minute}`
    )
  );
  const [selectedHour, setSelectedHour] = useState(undefined);
  const [isHidden, setIsHidden] = useState(true);
  return (
    <View style={styles.container}>
      <Button
        text={text + (selectedHour ? " " + selectedHour : "")}
        onPress={() => setIsHidden((prev) => !prev)}
        style={{
          backgroundColor: "transparent",
          color: "black",
          borderWidth: 1,
          display: isHidden ? "flex" : "none",
          padding: 10,
          borderColor: "gray",
          color: "gray",
        }}
      />
      <Picker
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 150,
          display: isHidden ? "none" : "flex",
        }}
        selectedValue={selectedHour}
        pickerData={times}
        onValueChange={(value) => {
          setSelectedHour(value);
          setIsHidden(true);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    maxHeight: 150,
    overflow: "hidden",
    marginEnd: 3,
    marginStar: 3,
  },
});
