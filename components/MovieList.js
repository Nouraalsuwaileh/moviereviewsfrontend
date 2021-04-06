import movieStore from "../stores/movieStore";
import MovieItem from "./MovieItem";
import { List, Content } from "native-base";
import { observer } from "mobx-react";
import React from "react";
import { Text, View, Button, Alert } from "react-native";
import AddButton from "../buttons/AddButtom";
import { ButtonStyled, CreateButtonStyled, MovieItemStyled } from "../styles";

const MovieList = ({ navigation }) => {
  if (movieStore.loading) return <Text>Loading...</Text>;
  const movieList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} navigation={navigation} />
  ));
  return (
    <View>
      <Button
        title="Test Button"
        color="#e4bad4"
        onPress={() => Alert.alert("Simple Button pressed")}
      />

      <Button
        onPress={() => navigation.navigate("New Movie Form")}
        title="Create Movie"
        color="#e4bad4"
      >
        Add Movie!
      </Button>

      <List>{movieList}</List>
      {/* <AddButton/> */}
    </View>
  );
};

export default observer(MovieList);
