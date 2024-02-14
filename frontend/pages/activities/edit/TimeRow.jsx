import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "react-native-vector-icons";
import CalendarPick from "../../../components/calendar/CalendarPick";
import HoursPicker from "../add/HoursPicker";

export default function TimeRow({
  task,
  openExetntion,
  setOpenExetntion,
  isStartTime,
}) {
  const type = isStartTime ? "startTime" : "endTime";
  return (
    <View style={{ width: "100%", ...styles.row }}>
      <AntDesign
        name="clockcircle"
        size={styles.iconProps.size}
        color={styles.iconProps.color}
        style={styles.icon}
      />
      <View style={{ ...styles.container, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              setOpenExetntion((prev) =>
                prev === type + "_date" ? null : type + "_date"
              )
            }
          >
            <Text style={styles.iconText}>
              {task[type].toISOString().replace("T", " ").split(" ")[0]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setOpenExetntion((prev) =>
                prev === type + "_time" ? null : type + "_time"
              )
            }
          >
            <Text style={styles.iconText}>
              {task[type]
                .toISOString()
                .replace("T", " ")
                .split(" ")[1]
                .split(".")[0]
                .slice(0, -3)}
            </Text>
          </TouchableOpacity>
        </View>
        <CalendarPick
          show={openExetntion === type + "_date"}
          currentDate={task[type]}
          onDayPress={(day) => console.log(day)}
        />
        <HoursPicker
          show={openExetntion === type + "_time"}
          currentHour={
            task[type]
              .toISOString()
              .replace("T", " ")
              .split(" ")[1]
              .split(".")[0]
              .slice(0, -4) + "0"
          }
          isButtonHidden={true}
        />
      </View>
    </View>
  );
}
