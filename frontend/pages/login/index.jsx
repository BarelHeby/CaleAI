import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import woman from "../../assets/images/Woman_Think.png";
import Button from "../../components/Button";
import ImageButton from "../../components/image/ImageButton";
import Colors from "../../assets/Colors";
import routes from "../../assets/routes";
export default function Login({ navigation }) {
  function onSubmit() {
    navigation.navigate(routes.calandarView.name);
  }

  return (
    <View style={styles.container}>
      <Image source={woman} style={styles.image} />
      {/* <View style={{ marginTop: "auto", marginBottom: "auto" }}> */}
      <Text style={styles.text}>Login</Text>
      <View style={styles.input}>
        <Text style={styles.textIcon}>📧</Text>
        <TextInput
          placeholder="Email ID"
          style={{ ...styles.textInput, width: "90%" }}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.textIcon}>🔒</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 15,
              //   width: 60,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Forgot?
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
      {/* <View style={{ marginBottom: "auto", marginTop: "auto" }}> */}
      <Button text={"Login"} onPress={onSubmit} />
      {/* </View> */}
      <Text style={styles.small}>Or, login with ...</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          //   padding: 20,
          marginBottom: 40,
          alignItems: "center",
        }}
      >
        <ImageButton
          uri={
            "https://www.deliverlogic.com/wp-content/uploads/2021/04/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          }
        />

        <ImageButton
          uri={
            "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
          }
        />
      </View>
      <View style={{ marginStart: "auto", marginEnd: "auto" }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity
          style={{ marginStart: "auto", marginEnd: "auto", marginTop: 1 }}
          onPress={() => navigation.navigate(routes.register)}
        >
          <Text
            style={{
              color: Colors.primary,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: "100%",
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },
  image: {
    height: 200,
    aspectRatio: 1,
    resizeMode: "stretch",
    marginTop: 50,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "left",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  textInput: {
    color: "gray",
    marginEnd: 10,
    fontSize: 20,
    width: "70%",
  },
  textIcon: {
    width: 20,
    color: "gray",
    marginEnd: 10,
    fontSize: 20,
  },
  button: {
    marginTop: 50,
  },
  small: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
    fontSize: 15,
    color: "gray",
    width: 250,
    marginStart: "auto",
    marginEnd: "auto",
  },
});
