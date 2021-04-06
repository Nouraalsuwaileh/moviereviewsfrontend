import React from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import SignInScreen from "./SignInScreen";
import LinearGradient from "react-native-linear-gradient";
import { createStackNavigator } from "@react-navigation/stack";

//import navigation from " ";
//LinearGradient
// import LinearGradient from "react-native-linear-gradient";
// //Icon
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image // logo in the header
            source={require("../image/logo.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.footer}>
          <Text style={styles.title}>Movie Reviews For Every One</Text>
          <Text style={styles.text}>Sign in with account</Text>

          <View style={styles.Button}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Text style={styles.textSign}>Get Started</Text>
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity onPress={}>
            <LinearGradient>
              <Text>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

// height its calculated to the devics hight
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "black",
    fontWeight: "bold",
  },
});
