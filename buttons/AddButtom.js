import React, { useState } from "react";
import MovieModal from "../Modals/MovieModal";
import {CreateButtonStyled} from "../styles"



function AddButton(){
    const [isOpen , setIsOpen]=  useState(false);
    const closeModal =() => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return(
<>
<CreateButtonStyled  onClick={openModal} >
  Add Movie
  </CreateButtonStyled>
  <MovieModal isOpen={isOpen} closeModal={closeModal} />
</>
    )
    } 
    export default AddButton;
