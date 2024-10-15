import { View, Text, Image, ScrollView, Vibration } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import robot from "../../assets/images/robot.png";
import Colors from "../../assets/Colors";
import BotModel from "./model/BotModel";
import Activities from "../../assets/Activities";
import conf_bot from "./model/configuration/conf_bot";
import ChatText from "./components/ChatText";
import ChatButton from "./components/ChatButton";
import ChatHoursMinutes from "./components/ChatHoursMinutes";
import { Audio } from "expo-av";
counter_tasks = 0
chosen_tasks = []
task = {
"category": "",
"frequency": "",
"time": "",
"duration": "",
"split": ""
}
const activities_options = Object.keys(Activities).map((key) => {
  return {
    type: "Button",
    label: Activities[key].label,
    emoji: Activities[key].emoji,
    value: Activities[key].label,
    page: "category",
  };
});
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
//                               console.log(option)
                              if (option.page){
                              if (option.page == "category"){
                                    task.category = option.value
                                }
                              if (option.page == "frequency"){
                                    task.frequency = option.value
                              }
                              if (option.page == "split"){
                                    task.split = option.value
                              }
                              if (option.page == "time"){
                                    task.time = option.value
                              }
                              }
                            if (option.successor) {
                              setResponses((prev) => [
                                ...prev,
                                ...option.successor,
                              ]);
                            }
                            setResponseIndex((prev) => prev + 1);
                            botModel.addResponse(response.key, option.label);
                            if (option.value == "generate"){
                                if (chosen_tasks.length === 0){
                                console.log("no tasks!")
                                setResponses((prev) => [
                                ...prev,
                                ... [{"bot_label": "You have no tasks to put in the calendar! insert a category for your first task What Category does the task belong to?", "key": "category", "options": activities_options,}, {"bot_label": "How Often do you want to do this task?", "key": "frequency", "options": [
              { type: "Button", label: "Daily", value: "daily", page: "frequency" },
              { type: "Button", label: "Weekly", value: "weekly", page: "frequency" },
              { type: "Button", label: "Monthly", value: "monthly", page: "frequency" },
            ]},
                       {
            bot_label: "what time of the day do you wish to do this task?",
            key: "time",
            options: [
              { type: "Button", label: "Morning", value: "Morning", page: "time" },
              { type: "Button", label: "Noon", value: "Noon", page: "time" },
              { type: "Button", label: "Evening", value: "Evening", page: "time" },
            ],
          },
             {"bot_label": "How long do you want to spend on this task?", "key": "duration", "options": [{type: "text-hours-minutes",label: "Set Duration",},]}, {"bot_label": "Is this task can be split into multiple times?", "key": "split", "options": [
              { type: "Button", label: "Yes", value: "yes", page: "split" },
              { type: "Button", label: "No", value: "no", page: "split" },
            ]}, {"bot_label": "Task Added! what next?", "key": "more?", "options": [
              { type: "Button", label: "Add another task", value: "more" },
              { type: "Button", label: "Generate New Calendar", value: "generate" },
            ]}],
                              ]);






                                }
                                console.log(chosen_tasks)
//                                 here need to call the algorithm with chosen_tasks
                            }
                            if (option.value == "more"){
                            counter_tasks += 1
                            task.id = counter_tasks
                            console.log(task)
                            chosen_tasks.unshift(task)

                            task = {
"category": "",
"frequency": "",
"time": "",
"duration": "",
"split": ""
}

                                setResponses((prev) => [
                                ...prev,
                                ... [{"bot_label": "Great! What Category does the task belong to?", "key": "category", "options": activities_options,}, {"bot_label": "How Often do you want to do this task?", "key": "frequency", "options": [
              { type: "Button", label: "Daily", value: "daily", page: "frequency" },
              { type: "Button", label: "Weekly", value: "weekly", page: "frequency" },
              { type: "Button", label: "Monthly", value: "monthly", page: "frequency" },
            ]},
           {
            bot_label: "what time of the day do you wish to do this task?",
            key: "time",
            options: [
              { type: "Button", label: "Morning", value: "Morning", page: "time" },
              { type: "Button", label: "Noon", value: "Noon", page: "time" },
              { type: "Button", label: "Evening", value: "Evening", page: "time" },
            ],
          },

             {"bot_label": "How long do you want to spend on this task?", "key": "duration", "options": [{type: "text-hours-minutes",label: "Set Duration",},]}, {"bot_label": "Is this task can be split into multiple times?", "key": "split", "options": [
              { type: "Button", label: "Yes", value: "yes", page: "split" },
              { type: "Button", label: "No", value: "no", page: "split" },
            ]}, {"bot_label": "Task Added! what next?", "key": "more?", "options": [
              { type: "Button", label: "Add another task", value: "more" },
              { type: "Button", label: "Generate New Calendar", value: "generate" },
            ]}],
                              ]);

                            }
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
                          task.duration = val
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
