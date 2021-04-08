import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import FontAwesome, { SolidIcons } from "react-native-fontawesome";
// import { set } from "react-native-reanimated";
// import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Entypo } from "@expo/vector-icons";

import { useState } from "react";
const SignInScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <Feather name="user" size={24} color="black" />
          {/* <FontAwesome style={styles.iconStyle} icon={SolidIcons.user} /> */}
          <TextInput /// input
            onChangeText={(value) => setUser({ ...user, username: value })}
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="no
            ne"
          />
          {/* <Feather name="check-circle" color="green" size={20} /> */}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

        <View style={styles.action}>
          <Entypo name="lock" size={24} color="black" />
          {/* <FontAwesome style={styles.iconStyle} icon={SolidIcons.lock} /> */}
          <TextInput /// input
            onChangeText={(value) => setUser({ ...user, password: value })}
            placeholder="Your Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
          />
          {/* <Feather name="check-circle" color="green" size={20} /> */}
        </View>
        <View style={styles.button}>
          <Text style={[styles.textSign, { color: " #fff" }]}>Sign In</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={[
              styles.signIn,
              {
                borderColor: "009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text style={[styles.textSign, { color: "#8d063e" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8d063e",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#8d063e",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
