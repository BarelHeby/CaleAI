import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../../components/Button";
import Task from "../../../models/Task";
import CategoryRow from "./CategoryRow";
import { MaterialIcons } from "react-native-vector-icons";
import TimeRow from "./TimeRow";
import NameRow from "./NameRow";
import DescriptionRow from "./DescriptionRow";
import Colors from "../../../assets/Colors";
// const task = new Task(
//   new Date().toISOString(),
//   "Read Harry Poter",
//   "read",
//   "my desctiption",
//   new Date(),
//   new Date(),
//   "icon"
// );
export default function EditTask({ task }) {
  const [openExetntion, setOpenExetntion] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.seperator}></Text>
      <ScrollView style={styles.fullWidth}>
        <NameRow task={task} />
        <CategoryRow
          task={task}
          openExetntion={openExetntion}
          setOpenExetntion={setOpenExetntion}
        />
        <TimeRow
          isStartTime={true}
          task={task}
          openExetntion={openExetntion}
          setOpenExetntion={setOpenExetntion}
        />
        <TimeRow
          isStartTime={false}
          task={task}
          openExetntion={openExetntion}
          setOpenExetntion={setOpenExetntion}
        />
        <DescriptionRow
          task={task}
          openExetntion={openExetntion}
          setOpenExetntion={setOpenExetntion}
        />
        {/* <Text style={styles.seperator}></Text> */}
      </ScrollView>
      <View style={{ justifyContent: "center", padding: 10 }}>
        {/* <Button text={"Dismiss"} style={{ backgroundColor: "red" }} /> */}
        <Button
          text={"Save"}
          style={{ backgroundColor: Colors.tertiary, color: "black" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 400,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seperator: {
    width: "100%",
    borderWidth: 1,
    height: 1,
    borderColor: "gray",
  },
  fullWidth: {
    width: "100%",
  },
  icon: {
    width: 30,
    marginTop: 10,
  },
  iconProps: {
    size: 24,
    color: "black",
  },
});
