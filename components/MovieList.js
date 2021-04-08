import movieStore from "../stores/movieStore";
import MovieItem from "./MovieItem";
import { List, Content } from "native-base";
import { observer } from "mobx-react";
import React from "react";
import {
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AddButton from "../buttons/AddButtom";
import { ButtonStyled, CreateButtonStyled, MovieItemStyled } from "../styles";

const MovieList = ({ navigation }) => {
  if (movieStore.loading) return <Text>Loading...</Text>;
  const movieList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} navigation={navigation} />
  ));
  return (
    <View>
      <ScrollView>
        <Button
          onPress={() => navigation.navigate("New Movie Form")}
          title="Create Movie"
          color="#8d063e"
        >
          Add Movie!
        </Button>
        <List>{movieList}</List>
      </ScrollView>
    </View>
  );
};

export default observer(MovieList);
