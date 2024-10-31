import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import Task from "../../models/Task";
import DailyCalendarView from "./DailyCalendarView";
import UserPanel from "./UserPanel";
import SidePanel from "./sidePanel";
import AddModal from "../activities/add/AddModal";
import routes from "../../assets/routes";
import User from "../../models/User";
import { CommonActions } from "@react-navigation/native";
import Manager from "../../services/manager";
import Event from "../../models/Event";
export default function CalandarView({ navigation }) {
  
  const today = new Date();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selected, setSelected] = useState(new Date());
  // async function changeDate(date) {
  //   setSelected(new Date(date.dateString))
  //   setIsLoading(true);
  //   const resp = await Event.getEvents(date.dateString);
  //   setEvents(resp);
  //   setIsLoading(false);
  // }

  useEffect(() => {
    async function getEvents() {
      console.log("Getting events for date", selected);
      setIsLoading(true);
      const resp = await Event.getEvents(selected.toISOString().split("T")[0]);
      setEvents(resp);
      setIsLoading(false);
    }
    if (selected)
    getEvents();
  }, [selected]);
  // const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    async function checkUser() {
      if (!(await User.is_logged_in())) {
        console.log("User is logged in");
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: routes.welcome.name }],
          })
        );
      }
    }
    checkUser();
  }, []);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginTop: 50,
        flex: 1,
      }}
    >
      {/* <SidePanel
        show={showSideBar}
        setShow={setShowSideBar}
        navigation={navigation}
      /> */}
      <UserPanel navigation={navigation} />
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
          onDayPress={(date) => setSelected(new Date(date.dateString))}
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
      <DailyCalendarView
        events={events}
        selectedDate={selected}
        setSelectedDate={setSelected}
        isLoading={isLoading}
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
// const events = Array.from({ length: 10 }, (_, i) => {
//   let startTime = new Date();
//   let endTime = new Date();
//   endTime.setDate(startTime.getDate() + 1);

//   return {
//     startTime: startTime,
//     endTime: endTime,
//     name: `${categories[i % categories.length]} Name`,
//     description: `This is the summary for event ${i + 1}`,
//     category: categories[i % categories.length], // Cycle through categories
//   };
// });
