import movieStore from "../stores/movieStore";
import ReviewItem from "./ReviewItem";
import { List, Content } from "native-base";
import { observer } from "mobx-react";
import React from "react";
import { Text, View, Button, Alert } from "react-native";

const ReviewList = ({  name ,navigation }) => {
  if (movieStore.loadingreviews) return <Text>Loading...</Text>;

  const movieReviews = movieStore.reviews.filter((review) =>(review.movie.name === name));
  const reviewList = movieReviews.map((review) => (
    <ReviewItem review={review} key={review.id} navigation={navigation} />
  ));
  const movieFound = movieStore.movies.find(m => m.name===name);
  return (
    <View>

      <Button
        onPress={() => navigation.navigate("New Review Form", {movieId : movieFound.id})}
        title="Add Review"
        color="#e4bad4"
      >
        Add Review!
      </Button>
      <List>{reviewList}</List>
    </View>
  );
};

export default observer(ReviewList);
