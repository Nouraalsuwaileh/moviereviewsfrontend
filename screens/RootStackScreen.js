import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MovieList";
import NewMovieForm from "../components/NewMovieForm";
import NewReviewForm from "../components/NewReviewForm";
import Home from "../components/Home";

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      options={{ headerShown: false }}
      name="SplashScreen"
      component={SplashScreen}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="SignInScreen"
      component={SignInScreen}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="SignUpScreen"
      component={SignUpScreen}
    />
    <RootStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="Movie List" component={MovieList} />
    <RootStack.Screen name="Movie Details" component={MovieDetails} />
    <RootStack.Screen name="New Movie Form" component={NewMovieForm} />
    <RootStack.Screen name="New Review Form" component={NewReviewForm} />
  </RootStack.Navigator>
);

export default RootStackScreen;
