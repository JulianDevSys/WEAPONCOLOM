
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsPersonRaisedHand } from "react-icons/bs";
import { useState } from "react";
import Register from "../Modales/Register";
import Login from "../Modales/Login"
import "./StyleHeader.css"
 
 export default function Header(){

    const [modal, setModal]=useState([])
    

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
          onClick={()=>setModal(<Register  closeModal={()=> setModal([])}/>)}/>
          </div>

          <div className="iconos">
          <BsPersonRaisedHand className="Container_Header__buscar" onClick={()=>setModal(<Login  closeModal={()=> setModal([])}/>)}/>
          </div>

        </div>
        {modal}

      </div>
      
    </div>
    )
 }
 