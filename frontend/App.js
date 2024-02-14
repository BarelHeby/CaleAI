import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Register from "./pages/register";
import Welcome from "./pages/welcome";
import AddActivity from "./pages/activities/add";
import CalandarView from "./pages/calandarView";
import EditTask from "./pages/activities/edit";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Register /> */}
      {/* <Welcome /> */}
      {/* <AddActivity /> */}
      <CalandarView />
      {/* <EditTask /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
