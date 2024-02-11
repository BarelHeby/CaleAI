import { View, Text, Pressable, Alert, TouchableOpacity } from "react-native";
import TextBox from "../../components/textbox";
import { useState } from "react";
import ImageButton from "../../components/image/ImageButton";
import Navigation from "../../components/navigation";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do cnot match!");
    } else {
      // Submit the form
      Alert.alert("Success", "Registration successful!");
    }
  };

  const styles = {
    input: {
      marginTop: 30,
    },
  };
  return (
    <View>
      <Navigation text={"Let's Get Started"} />
      <View
        style={{
          width: "80%",
          padding: 10,
          alignContent: "center",
          height: "70%",
        }}
      >
        <TextBox
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextBox
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextBox
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextBox
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            marginStart: "auto",
            marginEnd: "auto",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Sync Your Calendar
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <ImageButton
            uri={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJtVcRDEWwHx0uI4sSgR9e92sX1AvBWj-UmSJmf1JqQ&s"
            }
          />

          <ImageButton
            uri={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAbFBMVEX///8AAAD8/Pz39/fz8/Pm5ubt7e1XV1dFRUUuLi7T09NOTk7w8PDf39/p6eni4uKqqqooKCh6enqCgoLHx8eMjIyjo6NqamrAwMBkZGQ5OTk0NDSwsLAODg5eXl65ubmUlJQcHBwWFhZycnJhbJCNAAAEX0lEQVR4nO2c7ZqqIBRGoaxMM81vy1Gr+7/HYzZTFljjhnfweU7rd2dcBxA2e4OMffjw4T/A8pyynpm2eCJOVjvOXcu0Rx+/OfIOe2ta5Y4VrjmfmtYm4ncmoxW7PSu+msbYshL+QDGNN9F+tOKhaaELzuHJiqemlVqWu2cr7ph2YmyxF6y4aacWV7RamXZiLBKteGxaisUSqwlMphIr3piWYqlMa2nayhPnBs4T01askVitPdNWS1kX1qatpI1lm5Zi2+cVumXnm7ZiziS7kIVTfAsZE+IZXsxNOzE2F6zOppUuCEOrmUSoHDxKrUvTQlce10N3Ydrnm77WPjdtc6OnFRgPGu58a+0L88Fon/i4d89BPJUx9ZKZtWyZw6cKy8vTJIqS9BfN4qdRtnJbiixqvA3IaOaX2Vd/EljVwyGelZ+fp9dDkgNCwrhaPz+IH8OB8d2shN92c2yWan1JF9LNQ9cGtbAeL5KhH3f/INfWnaUYHdwpgkepSGzVR2w9OQnn+OY5PHT8S5vNNs7L/8CNs4YGS77eP4cfqjAMM/mIkuCqDn5PEqHrQK0jfdmOVAcnlTWqBkldoLeXbDOjjQN1+cyRVu3kSlsqtyesFk8oXhboHexBGV6yfKNeckJrIV/CjgOlrZboLjyRXkRJRkErFWlZ3ICtiEUzcGM1JCl5clYfEc0KPDmQK2ZQq4JqVSKtVtRk3CxDapEDGv9XATkRchdK61zaoEelyD5USKgiJ63g/eMHEHPGGqEnb5BDS6EGNJhv0IBCXeNlZkMReq4XOpnSN4fzCmd1oOcerF8nOMbj0rNusnLlBLS8d2kzBRQOmCG1KnqFEamV0Sd5ZJomI1tBtxfVNMeWS8/lIrVseqXKlxyj08UXffFZSs7RaYO+VCPXRIXAZlYAtfZkLWxahL4oyg48aaMhayGDZoXFGlok4OTTJNANGT9StRi2TNBQtYBRc8uaugBBxzz96DU0Y8PJJwaRMUQHLZmE3JJ17GixM7wKZZPCQXgZirsULeyE2mFTtv3AAPUHytHw4P2fVScdPfCd35wUUeY8dr6HBs49mpE9CV5/bpyaUVmJP3gXr4ys4eFPG1wZuXEEnxj54TDOCl/ZvzK64vkng378nCq9HqMbQr4Lf5iFFHj9xUw/3gp/cIRY4sduY1t2tJoGtJLOyTtGB3zcjZqOmOjhEeiCvaenupBRqsLtlg1uZVS6bQ2bJBRvLqJGveLnBeaYjb/y5VNIN57ULxggAi8Nd8wA3VipW7VeuiMcWr5GQHcCR9fXNPR60c9KPSPcvFJA43da5vpCL63X5Ze6hv1a73V5Tdln2nH0F+iZ7fXf1c0H+3FdNUG8mF3YxmVUDHc44kM7A8WNXe0/5qhmTjAghrkCvpV9O0feLfVR/KmmyV1kI0RfzdDuxRGmlBT4FS4rvLXYyT6/rCl5TXU7G70v0Ff4N06dnMOkjJ237/rcc+IyCMq4fR/AVh8+fADwDzwDRo3Pm1V5AAAAAElFTkSuQmCC"
            }
          />
        </View>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          Sync your calendar help us to manage your current activities.
        </Text>
        <Text style={{ textAlign: "center" }}>
          if you dont have calendar it's fine
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#5F33E1",
            borderRadius: 10,
            padding: 15,
            shadowColor: "gray",
            shadowRadius: 10,
            shadowOpacity: 1,
            shadowOffset: { width: 0, height: 10 },
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{
              color: "white",
              marginStart: "auto",
              marginEnd: "auto",
              fontSize: 19,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        {/* <Pressable
          style={{ margin: 20, backgroundColor: "#5F33E1" }}
          title="Register"
          onPress={handleSubmit}
          color="#5F33E1"
        /> */}
      </View>
    </View>
  );
}

export default Register;
