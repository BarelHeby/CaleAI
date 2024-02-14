import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Register from "./pages/register";
import Welcome from "./pages/welcome";
import AddActivity from "./pages/activities/add";
import CalandarView from "./pages/calandarView";
import EditTask from "./pages/activities/edit";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Navigation from "./components/navigation";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./assets/routes";
import routesComponents from "./assets/routesComponents";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        {Object.keys(routes).map((route, index) => {
          return (
            <Stack.Screen
              key={index}
              name={routes[route].name}
              component={routesComponents[route].component}
              options={options}
            />
          );
        })}
        {/* <Stack.Screen name="welcome" component={Welcome} options={options} />
        <Stack.Screen name="register" component={Register} options={options} />
        <Stack.Screen
          name="addActivity"
          component={AddActivity}
          options={options}
        />
        <Stack.Screen
          name="calandarView"
          component={CalandarView}
          options={options}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}
const options = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
