import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { List } from "native-base";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import MovieList from "./components/MovieList";
import movieStore from "./stores/movieStore";
import { Switch } from "native-base";
import MovieDetails from "./components/MovieDetails";
import { createStackNavigator } from "@react-navigation/stack";
import NewMovieForm from "./components/NewMovieForm";
import NewReviewForm from "./components/NewReviewForm";
// import screen
import RootStackScreen from "./screens/RootStackScreen";

// const moviesTestArray = [
//   {
//     name: "Home Alone",
//     image: "https://alwafd.org/images/images/14(645).jpg",
//     year: 1993,
//     genre: "comedy",
//     description: "comedy Story",
//     rating: 9,
//     userId: 1,
//   },

//   {
//     name: "Home Alone 2",
//     image: "https://alwafd.org/images/images/14(645).jpg",
//     year: 1993,
//     genre: "comedy",
//     description: "comedy Story",
//     rating: 9,
//     userId: 2,
//   },
// ];

const theme = {
  light: {
    mainColor: "darkred", // main font color
    backgroundColor: "white", // main background color
    otherColor: "grey",
    buttonTitle: "Dark Mode",
    red: "#ff3232",
  },

  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    otherColor: "grey",
    buttonTitle: "Light Mode",
    red: "#ff3232",
  },
};
const Stack = createStackNavigator();
console.log("App -> Stack", Stack);
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>

    <ThemeProvider theme={theme.dark}>
      <NavigationContainer>
        <RootStackScreen />
        {/* <Navigator initialRouteName="Home"> */}
        {/* <Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Screen name="Movie Details" component={MovieDetails} />
          <Screen name="Movie List" component={MovieList} />
          <Screen name="New Movie Form" component={NewMovieForm} />
          <Screen name="New Review Form" component={NewReviewForm} /> */}
        {/* <MovieList movies={movieStore.movies} /> */}
        {/* <MovieList movies={moviesTestArray} /> */}
        {/* <MovieDetails/> */}
        {/* </Navigator> */}
      </NavigationContainer>
    </ThemeProvider>

    // {/* <StatusBar style="auto" /> */}
  );
}
