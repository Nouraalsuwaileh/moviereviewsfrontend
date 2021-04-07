import React from "react";
import { Text, View } from "react-native";

// Styling
// import { ImageBackground } from "react-native";
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://s3.amazonaws.com/the-citizen-web-assets-us/uploads/2018/02/13190205/death.of_.the_.film_.critic20-20Copy-1.jpeg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>RevFlix</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("Movie List")}>
            Movie List
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
