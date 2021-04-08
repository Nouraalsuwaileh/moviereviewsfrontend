import { makeAutoObservable } from "mobx";
// import axios from "axios";
import { configure } from "mobx";
import instance from "./instance";
// import { getNextId } from "mobx/dist/internal";

//MobX strict mode error fix, from https://stackoverflow.com/questions/64770762/mobx-since-strict-mode-is-enabled-changing-observed-observable-values-withou
configure({
  enforceActions: "never",
});

class MovieStore {
  reviews = [];
  movies = [];
  loading = true;
  loadingreviews = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies = async () => {
    try {
      const res = await instance.get("/movies");
      this.movies = res.data;
      this.loading = false;
      console.log("fetchMovies response", res.data);
    } catch (error) {
      console.error("MovieStore -> fetchMovies -> error", error);
    }
  };

  fetchReviews = async () => {
    try {
      const res = await instance.get("/reviews");
      this.reviews = res.data;
      this.loadingreviews = false;
      console.log("fetchReviews response", res.data);
    } catch (error) {
      console.error("MovieStore -> fetchReviews -> error", error);
    }
  };

  createMovie = async (newMovie) => {
    try {
      const res = await instance.post("/movies", newMovie);
      res.data.user = { id: newMovie.userId }; //change when auth is added
      this.movies.push(res.data);
      // navigation.goBack();
      console.log("MovieStore -> createMovie -> this.movies", this.movies);
    } catch (error) {
      console.error("MovieStore -> createMovie -> error", error);
      // next(error);
    }
  };

  createReview = async (newReview) => {
    try {
      const res = await instance.post("/reviews", newReview);
      this.fetchReviews();
      // navigation.goBack();
      // res.data.movie = { id: newReview.movieId };
      // this.reviews.push(res.data);
      console.log("MovieStore -> createReview -> this.reviews", this.reviews);
    } catch (error) {
      console.error("MovieStore -> createReview -> error", error);
    }
  };

  deleteMovie = async (movieId, navigation) => {
    console.log(movieId);
    try {
      let res = await instance.delete(`/movies/${movieId}`);
      console.log(res);
      this.movies = this.movies.filter((movie) => movie.id !== movieId);
      navigation.goBack();
    } catch (error) {
      console.error("MovieStore -> deleteMovie -> error", error);
    }
  };

  deleteReview = async (reviewId) => {
    try {
      await instance.delete(`/reviews/${reviewId}`);
      this.reviews = this.reviews.filter((review) => review.id !== reviewId);
    } catch (error) {
      console.error("MovieStore -> deleteReview-> error", error);
    }
  };
}

const movieStore = new MovieStore();
movieStore.fetchMovies();
movieStore.fetchReviews();

export default movieStore;
