import { View } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import Task from "../../models/Task";
import DailyCalendarView from "./DailyCalendarView";
import UserPanel from "./UserPanel";
import SidePanel from "./sidePanel";
import AddModal from "../activities/add/AddModal";
export default function CalandarView() {
  const today = new Date();
  const [selected, setSelected] = useState(today);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginTop: 50,
        flex: 1,
      }}
    >
      <SidePanel
        show={showSideBar}
        setShow={setShowSideBar}
        setShowAddModal={setShowAddModal}
      />
      <AddModal show={showAddModal} setShow={setShowAddModal} />
      <UserPanel setShowSideBar={setShowSideBar} />
      <View
        style={{
          marginStart: "auto",
          marginEnd: "auto",
          width: "95%",
          shadowColor: "gray",
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
        }}
      >
        <Calendar
          style={{
            width: "100%",
            height: 310,
            borderRadius: 20,
          }}
          markedDates={{
            [selected.toISOString().split("T")[0]]: {
              selected: true,
              selectedColor: "blue",
            },
          }}
          // selected={selected}
          // current={selected.toString()}
          onDayPress={(day) => setSelected(new Date(day.dateString))}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          firstDay={0}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          theme={{
            calendarBackground: "transparent",
          }}
        />
      </View>
      {/* <DailyView /> */}
      <DailyCalendarView
        events={events}
        selectedDate={selected}
        setSelectedDate={setSelected}
      />
    </View>
  );
}
let categories = [
  "callMom",
  "exercise",
  "read",
  "listenToMusic",
  "Learning",
  "clean",
  "other",
];
const events = Array.from({ length: 10 }, (_, i) => {
  let startTime = new Date();
  let endTime = new Date();
  endTime.setDate(startTime.getDate() + 1);

  return {
    startTime: startTime,
    endTime: endTime,
    name: `${categories[i % categories.length]} Name`,
    description: `This is the summary for event ${i + 1}`,
    category: categories[i % categories.length], // Cycle through categories
  };
});
