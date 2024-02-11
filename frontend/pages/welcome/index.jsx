import { View, Text, Image } from "react-native";
import React from "react";
import woman from "../../assets/images/Woman_Think.png";
import Button from "../../components/Button";
export default function Welcome() {
  return (
    <View
      style={{
        marginTop: 50,
        height: "100%",
        width: "90%",
        alignSelf: "center",
        flex: 1,
      }}
    >
      <Image
        source={woman}
        style={{
          width: 300,
          height: 400,
          resizeMode: "stretch",
          marginTop: 50,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />
      <View style={{ marginTop: "auto", marginBottom: "auto" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            // marginTop: 30,
          }}
        >
          Welcome to CaleAI
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            fontSize: 19,
            color: "gray",
            width: 250,
            marginStart: "auto",
            marginEnd: "auto",
          }}
        >
          Get more from your time! manage your task easily and add habits to
          your life
        </Text>
      </View>
      <View style={{ marginBottom: "auto", marginTop: "auto" }}>
        <Button
          text={"Let's Start"}
          onPress={undefined}
          style={{ marginTop: 50 }}
        />
      </View>
    </View>
  );
}
