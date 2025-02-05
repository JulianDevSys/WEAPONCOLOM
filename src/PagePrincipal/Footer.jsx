import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

import "./StyleFooter.css"


export default function Footer(){
    return(
        <div className="container_footer">

            <div className="information_footer">

          <div className="other_container ">
            <p className="edit_info_container">
              servicio al cliente : Horario Lunes a viernes de 9:00am a 6:00pm
            </p>
            <hr className="edit_hr2" />
            <p className="edit_info_container">informacion </p>
            <hr className="edit_hr2" />
            <p className="edit_info_container onemore">
              {" "}
              correo: escastr@gmail.com
            </p>
            <p className="edit_info_container onemore"> 317250283</p>
          </div>

                
          <div className="btn_redes">
            <FaInstagram className="buttons_redes" onClick={()=>{
                window.location.href ="https://www.instagram.com/esteban_castro_henao?igsh=MXdmODd5c2tpNnd0cg=="}}/>

            <FaWhatsapp className="buttons_redes" onClick={()=>{
                window.location.href = "https://www.whatsapp.com"}}/>

            <ImFacebook2 className="buttons_redes"onClick={()=>{
                window.location.href ="https://www.facebook.com/profile.php?id=100006573377077";}}/>
   
   </div>



        </div>


            </div>

    )
}