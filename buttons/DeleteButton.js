import React, { useState } from "react";
import ProductModal from "../Modals/ProductModal";
import {CreateButtonStyled} from "../styles"



function AddButton(){
    const [isOpen , setIsOpen]=  useState(false);
    const closeModal =() => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return(
<>
<CreateButtonStyled  onClick={openModal} >
  Add Product
  </CreateButtonStyled>
  <ProductModal isOpen={isOpen} closeModal={closeModal} />
</>
    )
    } 
    export default AddButton;
