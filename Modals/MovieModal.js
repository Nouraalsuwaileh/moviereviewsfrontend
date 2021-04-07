import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import movieStore from "../stores/movieStore";
import { CreateButtonStyled } from "../styles";

const MovieModal = ({ isOpen, closeModal, createMovie }) => {
  const [movie, setMovie] = useState({
    name: "",
    image: "",
    year: 0,
    genre: "",
    description: "",
    rating: 0,
    userId: 0,
  });
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.createMovie(movie);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Movie Modal"
    >
      <form onSubmit={handleSubmit}>
        <view className="form-group row">
          <view className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </view>
          <view className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              onChange={handleChange}
            />
          </view>
          <div className="col-6">
            <label>Year</label>
            <input
              name="year"
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>genre</label>
            <input
              required
              name="genre"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Rating</label>
            <input
              name="rating"
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>UserId</label>
            <input
              name="userId"
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </view>

        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default MovieModal;
