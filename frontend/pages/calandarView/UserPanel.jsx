import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import Colors from "../../assets/Colors";
import User from "../../models/User";
import routes from "../../assets/routes";
import { resetStackAndGoTo } from "../../models/Stack";
import robot from "../../assets/images/robot.png";
import logout from "../../assets/images/logout.png";
export default function UserPanel({ navigation }) {
  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: Colors.fifth,
          alignItems: "center",
          borderRadius: 20,
          borderWidth: 1,
          shadowColor: "black",
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.chatbot.name)}
        >
          <Image
            source={robot}
            // width={50}
            // height={50}
            style={{
              resizeMode: "contain",
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "black",
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginStart: 10 }}>CaleAI</Text>
        <TouchableOpacity
          onPress={async () => {
            await User.logout();
            resetStackAndGoTo(routes.welcome.name, navigation);
          }}
        >
          <Image
            size={50}
            source={logout}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
