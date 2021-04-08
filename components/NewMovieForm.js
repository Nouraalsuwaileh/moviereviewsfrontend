import React, { useState } from "react";
import { useReducer } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import movieStore from "../stores/movieStore";
// import { CreateButtonStyled } from "../styles";

const NewMovieForm = ({ navigation }) => {
  const [movie, setMovie] = useState({
    name: "",
    image: "",
    year: 0,
    genre: "",
    description: "",
    rating: 0,
    // userId: 0,
  });
  //   const handleChange = (event) => {
  //     setMovie({ ...movie, [event.target.name]: event.target.value });
  //   };

  // const handleChange = () => {
  //   setMovie({
  //     ...movie,
  //     name: movie.name,
  //     image: movie.image,
  //     year: +movie.year,
  //     genre: movie.genre,
  //     description: movie.description,
  //     rating: +movie.rating,
  //   });
  // };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     movieStore.createMovie(movie);
  //   };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Movie Name"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setMovie({ ...movie, name: value })}
        value={movie.name}
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Movie Poster URL"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setMovie({ ...movie, image: value })}
        value={movie.image}
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Year Released"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setMovie({ ...movie, year: +value })}
        value={movie.year}
        autoCorrect={false}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Genre"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setMovie({ ...movie, genre: value })}
        value={movie.genre}
        autoCorrect={false}
      />

      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(value) => setMovie({ ...movie, description: value })}
        value={movie.description}
      />

      <TextInput
        style={styles.input}
        placeholder="Rating"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setMovie({ ...movie, rating: +value })}
        value={movie.rating}
        autoCorrect={false}
        keyboardType="numeric"
      />
      <Button
        title="Save New Movie"
        color="#8d063e"
        onPress={() => {
          movieStore.createMovie(movie);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default NewMovieForm;
