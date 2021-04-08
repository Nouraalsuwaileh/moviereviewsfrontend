import React from "react";
import { observer } from "mobx-react";
import { Text, Button } from "react-native";
import movieStore from "../stores/movieStore";
import {
  MovieDetailTitle,
  MovieDetailImage,
  MovieDetailWrapper,
  MovieContent,
} from "../styles";
import ReviewList from "./ReviewList";

const MovieDetails = ({ navigation, route }) => {
  const { movie } = route.params;
  if (movieStore.loading) return <Text> Loading ...</Text>;
  //   const movie = movieStore.movies[0];
  return (
    <MovieDetailWrapper>
      <Button
        onPress={() => movieStore.deleteMovie(movie.id, navigation)}
        title="Delete Movie"
        color="#8d063e"
      >
        Delete Movie!
      </Button>
      <MovieDetailImage source={{ uri: movie.image }} />
      <MovieDetailTitle>{movie.name}</MovieDetailTitle>
      <MovieContent>{`Year: ${movie.year}`}</MovieContent>
      <MovieContent>{`Genre: ${movie.genre}`}</MovieContent>
      <MovieContent>{`Story: ${movie.description}`}</MovieContent>
      <MovieContent>{`Rating: ${movie.rating}/10`}</MovieContent>
      <ReviewList name={movie.name} navigation={navigation} />
    </MovieDetailWrapper>
  );
};

export default observer(MovieDetails);
