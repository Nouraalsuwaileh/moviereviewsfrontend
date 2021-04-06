import React, { useState } from "react";
import MovieModal from "../Modals/MovieModal";
import { CreateButtonStyled } from "../styles";

function AddButton() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onPress={openModal} title="Create Movie" color="#e4bad4">
        Add Movie!
      </Button>
      ;{/* <MovieModal isOpen={isOpen} closeModal={closeModal} /> */}
    </>
  );
}
export default AddButton;
