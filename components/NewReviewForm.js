import React, { useState } from "react";
import { useReducer } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import movieStore from "../stores/movieStore";
// import { CreateButtonStyled } from "../styles";

const NewReviewForm = ({ route, navigation }) => {
  const [review, setReview] = useState({
    content: "",
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
  const { movieId } = route.params;
  return (
    <SafeAreaView>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(value) =>
          setReview({ ...review, content: value, movieId: movieId })
        }
        value={review.content}
      />

      <Button
        title="Save New Review"
        color="#e4bad4"
        onPress={() => {
          movieStore.createReview(review);
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

export default NewReviewForm;
