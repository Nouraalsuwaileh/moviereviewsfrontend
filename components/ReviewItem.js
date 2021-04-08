import { ListItem } from "native-base";
import React from "react";
import { Text, View, Image, Button } from "react-native";
import movieStore from "../stores/movieStore";

// Styling
// import { ImageBackground } from "react-native";
import { MovieItemStyled } from "../styles";

const ReviewItem = ({ review, navigation }) => {
  return (
    <>
      <ListItem>
        <Button
          onPress={() => movieStore.deleteReview(review.id, navigation)}
          title="Delete Review"
          color="#8d063e"
        >
          Delete Review!
        </Button>
        <MovieItemStyled>{review.content}</MovieItemStyled>
        {/* <Button
        onPress= {()=> movieStore.deleteReview(review.id, navigation)}
        title="Delete Movie"
        color="#e4bad4"
      >
        Delete Review!
      </Button> */}
      </ListItem>
    </>
  );
  // return <Text> movie Item </Text>;
};

export default ReviewItem;
