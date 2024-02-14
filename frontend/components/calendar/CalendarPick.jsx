import { View, Text } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
export default function CalendarPick({ show, currentDate, onDayPress }) {
  if (!show) return <></>;
  return (
    <Calendar
      style={{
        width: "95%",
        height: 310,
      }}
      markedDates={{
        [currentDate.toISOString().split("T")[0]]: {
          selected: true,
          selectedColor: "blue",
        },
      }}
      // selected={selected}
      // current={selected.toString()}
      onDayPress={onDayPress}
      onMonthChange={(month) => {
        console.log("month changed", month);
      }}
      firstDay={0}
      onPressArrowLeft={(subtractMonth) => subtractMonth()}
      onPressArrowRight={(addMonth) => addMonth()}
    />
  );
}
