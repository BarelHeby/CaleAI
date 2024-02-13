import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import Colors from "../../assets/Colors";

export default function UserPanel() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        // borderBottomWidth: 1,
        justifyContent: "space-between",
        padding: 10,
        // paddingTop: 0,
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
      <Entypo name="menu" size={40} color="black" />
      <Text style={{ fontSize: 20, marginStart: 10 }}>CaleAI</Text>
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
    </View>
  );
}
