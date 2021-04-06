import React from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  alert,
  StyleSheet,
  Image,
} from "react-native";

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <Text>SplashScreen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />

      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text>Headere</Text>

          <Image // logo in the header
            source={require("../image/logo.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text>Footer</Text>
          <Text>Movie Reviews For Every One</Text>
          <Text>Sighn in with acount</Text>
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
    color: "white",
    fontWeight: "bold",
  },
});
