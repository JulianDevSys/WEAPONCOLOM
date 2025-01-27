/* import image from "./assets/image1.png" */; 
/* import { BsCart4 } from "react-icons/bs"; */
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsPersonRaisedHand } from "react-icons/bs";
/* import ModalsRegister from "../components/registro/modalsRegister";
import ModalsSignIn from "../components/sing in/modasSignin"; */
import { useState } from "react";
import "./StyleHeader.css"
 
 export default function Header(){

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

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

          {/* <div className="iconos">
          <BsCart4
            className="Container_Header__buscar"
            onClick={handleShow}
          /> */}
         {/*  </div> */}

          <div className="iconos">
          <BsFillPersonPlusFill onClick={handleShow1}/>
          </div>

          <div className="iconos">
          <BsPersonRaisedHand
            onClick={handleShow2}
            
          />
          </div>

         {/*  <ShoppingCart show={show} handleClose={handleClose} /> */}
{/*           <ModalsRegister show1={show1} handleClose1={handleClose1} />
          <ModalsSignIn show2={show2} handleClose2={handleClose2} /> */}
        </div>

      </div>
    </div>
    )
 }
 