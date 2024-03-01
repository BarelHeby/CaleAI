import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import Colors from "../../assets/Colors";
import User from "../../models/User";
import routes from "../../assets/routes";
import { resetStackAndGoTo } from "../../models/Stack";

export default function UserPanel({ setShowSideBar, navigation }) {
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
        <TouchableOpacity onPress={() => setShowSideBar(true)}>
          <Entypo name="menu" size={40} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginStart: 10 }}>CaleAI</Text>
        <TouchableOpacity
          onPress={async () => {
            await User.logout();
            resetStackAndGoTo(routes.welcome.name, navigation);
          }}
        >
          <Image
            width={40}
            height={40}
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png",
            }}
            style={{
              borderRadius: 20,
              borderWidth: 1,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
