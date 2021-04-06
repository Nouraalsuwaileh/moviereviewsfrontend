import { makeAutoObservable } from "mobx";
import axios from "axios";
import { configure } from "mobx";

//MobX strict mode error fix, from https://stackoverflow.com/questions/64770762/mobx-since-strict-mode-is-enabled-changing-observed-observable-values-withou
configure({
  enforceActions: "never",
});

class MovieStore {
  reviews = [];
  movies = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies = async () => {
    try {
      const res = await axios.get("http://192.168.8.114:8000/movies");
      this.movies = res.data;
      this.loading = false;
      console.log("fetchMovies response", res.data);
    } catch (error) {
      console.error("MovieStore -> fetchMovies -> error", error);
    }
  };

  fetchReviews = async () => {
    try {
      const res = await axios.get("http://192.168.8.114:8000/reviews");
      this.cuisines = res.data;
      console.log("fetchReviews response", res.data);
    } catch (error) {
      console.error("MovieStore -> fetchReviews -> error", error);
    }
  };

  createMovie = async (newMovie) => {
    try {
      const res = await axios.post(
        "http://192.168.8.114:8000/movies",
        newMovie
      );
      res.data.user = { id: newMovie.userId }; //change when auth is added
      this.movies.push(res.data);
      console.log("MovieStore -> createMovie -> this.movies", this.movies);
    } catch (error) {
      console.error("MovieStore -> createMovie -> error", error);
    }
  };

  createReview = async (newReview) => {
    try {
      const res = await axios.post(
        "http://192.168.8.114:8000/reviews",
        newReview
      );
      res.data.movie = { id: newReview.movieId };
      this.reviews.push(res.data);
      console.log("MovieStore -> createReview -> this.reviews", this.reviews);
    } catch (error) {
      console.error("MovieStore -> createReview -> error", error);
    }
  };

  deleteMovie = async (movieId) => {
    try {
      await axios.delete(`http://192.168.8.114/movies/${movieId}`);
      this.movies = this.movies.filter((movie) => movie.id !== movieId);
    } catch (error) {
      console.error("MovieStore -> deleteMovie -> error", error);
    }
  };

  deleteReview = async (reviewId) => {
    try {
      await axios.delete(`http://192.168.8.114/reviews/${reviewId}`);
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
