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
  Keyboard,
} from "react-native";
import SignInScreen from "./SignInScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeBackground } from "../styles";

//import navigation from " ";
//LinearGradient
// import LinearGradient from "react-native-linear-gradient";
// //Icon
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.container}> */}
      {/* <View style={styles.header}> */}
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.bakcgroundImage}
          source={require("../image/background.jpg")}
          // style={styles.logo}
          // resizeMode="stretch"
        />
        {/* </View> */}
        {/* </View> */}
      </View>

      <View style={styles.container}>
        {/* <View style={styles.footer}> */}
        {/* <Text style={styles.title}>Movie Reviews For Every One</Text> */}
        {/* <Text style={styles.text}>Sign in with account</Text> */}
        <View style={styles.Button}>
          <TouchableOpacity onPress={() => navigation.navigate("Movie List")}>
            <Text style={styles.textSign}>READ REVIEWS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Text style={styles.textSign}>POST YOUR OWN</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={}>
            <LinearGradient>
              <Text>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity> */}
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
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  bakcgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: 200,
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
    color: "white",
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  Button: {
    alignItems: "flex-end",
    margin: 10,
    padding: 7,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#324e73",
    backgroundColor: "#a1bfbf",
    marginLeft: 50,
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
    color: "#324e73",
    // fontWeight: "bold",
    marginTop: 5,
    fontSize: 22,
    fontFamily: "serif",
  },
});
