import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import Colors from "../../assets/Colors";
import Activities from "../../assets/Activities";
const Event = ({ event }) => {
  function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  return (
    <View
      style={{
        marginTop: 10,
        shadowColor: "black",
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
      }}
    >
      <Text style={{ fontSize: 15 }}>{formatTime(event.start)}</Text>
      <View
        style={[
          styles.event,
          {
            backgroundColor: Activities[event.category].color,
            flexDirection: "row",
            width: "100%",
            overflow: "hidden",
            alignItems: "center",
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
          },
        ]}
      >
        <Text style={{ fontSize: 30, marginEnd: 10, textAlign: "center" }}>
          {Activities[event.category].emoji}
        </Text>
        <View style={{ width: "70%", overflow: "hidden" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{event.name}</Text>
          <Text style={{ fontSize: 15 }}>{event.description}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 15 }}>{formatTime(event.end)}</Text>
    </View>
  );
};
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DailyCalendarView = ({ selectedDate, setSelectedDate, events }) => {
  const dateString =
    selectedDate.getDate() +
    " " +
    monthNames[selectedDate.getMonth()] +
    " " +
    selectedDate.getFullYear();
  function changeDate(days) {
    setSelectedDate(
      new Date(selectedDate.setDate(selectedDate.getDate() + days))
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.fifth,
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderRadius: 20,
          borderWidth: 1,
          shadowColor: "black",
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color={"black"}
          style={{ marginEnd: 10 }}
          onPress={() => changeDate(-1)}
        />
        <Text style={{ fontSize: 19 }}>{dateString}</Text>
        <AntDesign
          name="arrowright"
          size={24}
          color={"black"}
          style={{ marginEnd: 10 }}
          onPress={() => changeDate(1)}
        />
      </View>
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  event: {
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
});

export default DailyCalendarView;
