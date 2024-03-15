import { View, Text, Image, ScrollView, Vibration } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import robot from "../../assets/images/robot.png";
import Colors from "../../assets/Colors";
import BotModel from "./model/BotModel";
import conf_bot from "./model/configuration/conf_bot";
import ChatText from "./components/ChatText";
import ChatButton from "./components/ChatButton";
import ChatHoursMinutes from "./components/ChatHoursMinutes";
import { Audio } from "expo-av";
export default function ChatBot({ navigation }) {
  const [responses, setResponses] = useState([conf_bot.greeting]);
  const [responseIndex, setResponseIndex] = useState(0);
  const [botModel, setBotModel] = useState(new BotModel());
  const scrollViewRef = useRef();
  useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/message.mp3")
      );
      await sound.playAsync();
    }
    Vibration.vibrate(200);
    playSound();
  }, [responseIndex]);
  return (
    <View style={styles.container}>
      <View style={styles.image_conteiner}>
        <Image source={robot} style={styles.image} />
        <Text style={styles.header}>Cale Bot</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.chat_container}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {responses?.map((response, index) => {
          return index > responseIndex ? (
            <View key={index}></View>
          ) : (
            <View key={index}>
              <ChatText text={response.bot_label} />
              {index === responseIndex ? (
                <View style={styles.user_answer}>
                  {response.options?.map((option, index) => {
                    if (option.type === "Button") {
                      return (
                        <ChatButton
                          key={option.label + String(index)}
                          text={option.label}
                          emoji={option.emoji}
                          onPress={() => {
                            if (option.successor) {
                              setResponses((prev) => [
                                ...prev,
                                ...option.successor,
                              ]);
                            }
                            setResponseIndex((prev) => prev + 1);
                            botModel.addResponse(response.key, option.label);
                          }}
                        />
                      );
                    }
                    if (option.type === "text-hours-minutes") {
                      return (
                        <ChatHoursMinutes
                          key={option.label + String(index)}
                          text={option.label}
                          onPress={(val) => {
                            if (option.successor) {
                              setResponses((prev) => [
                                ...prev,
                                ...option.successor,
                              ]);
                            }
                            setResponseIndex((prev) => prev + 1);
                            botModel.addResponse(response.key, val);
                          }}
                        />
                      );
                    }
                  })}
                </View>
              ) : (
                <View>
                  <ChatText
                    text={botModel.getResponses()[response.key]}
                    isRobotSpeak={false}
                  />
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={{ height: "2%", opacity: 0, marginTop: 0 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  chat_container: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    marginBottom: 200,
    paddingBottom: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  image_conteiner: {
    // backgroundColor: Colors.fourth,
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: "10%",
    borderBottomWidth: 1,
  },
  user_answer: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
