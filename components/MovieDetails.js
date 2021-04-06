import React from "react";
import { observer } from "mobx-react";
import { Text} from "react-native";
import movieStore from "../stores/movieStore";
import {
  MovieDetailTitle,
  MovieDetailImage,
  MovieDetailWrapper,
  MovieContent,
} from "../styles";



const MovieDetails = ({ navigation, route }) => {
    const { movie } = route.params;
    if (movieStore.loading) return <Text> Loading ...</Text>;
//   const movie = movieStore.movies[0];
  return (
    <MovieDetailWrapper>
      <MovieDetailImage source={{ uri: movie.image }} />
      <MovieDetailTitle>{movie.name}</MovieDetailTitle>
      <MovieContent>{`Year: ${movie.year}`}</MovieContent>
      <MovieContent>{`Genre: ${movie.genre}`}</MovieContent>
      <MovieContent>{`Story: ${movie.description}`}</MovieContent>
      <MovieContent>{`Rating: ${movie.rating}/10`}</MovieContent>

    </MovieDetailWrapper>
  );
};

export default observer(MovieDetails);