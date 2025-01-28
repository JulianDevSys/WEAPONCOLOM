
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsPersonRaisedHand } from "react-icons/bs";
import { useState } from "react";
import Register from "../Modales/Register";
import "./StyleHeader.css"
 
 export default function Header(){

    const [registerModal, setRegisterModal]=useState([])

    return(
        <div className="Container_Header">

        <div className="header">
          

        <div className="logo_page">
        <img className="Container_header__imageLOGO" /* src={image} */ alt="image logo"></img>

      </div>

        <div className="title">
        <p className="editTitle">WEAPON COLOM </p>
        </div>

        <div className="Container_Header__modals">

          <div className="iconos">
          <BsFillPersonPlusFill  className="Container_Header__buscar" 
          onClick={()=>setRegisterModal(<Register  closeModal={()=> setRegisterModal([])}/>)}/>
          </div>

          <div className="iconos">
          <BsPersonRaisedHand className="Container_Header__buscar"
          />
          </div>

        </div>
        {registerModal}

      </div>
      
    </div>
    )
 }
 