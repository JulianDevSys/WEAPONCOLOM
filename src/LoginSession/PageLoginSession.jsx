import "./StylePageLoginSession.css"
import HeaderLogin from "./HeaderLogin"
import ShoppingCart from "../Modales/ShoppingCart"
import { useEffect, useState } from "react"
import getDatosWeapons from "../Hooks/getDatosWeapons"
import { data } from "react-router"

export default function PageLoginSession(){

    const [weapons, setWeapons]=useState()

    useEffect(() => {
        async function fetchProducts() {
          const data = await getDatosWeapons(); // Llamada a la API
          setWeapons(data); 
        }
    console.log(weapons)
        fetchProducts(); 
      }, []); 


    return(
        <div className="container_login">
            <div><HeaderLogin/></div>
                <div className="weapons_login">

                {weapons?.length > 0 ? (  // Verificamos que haya datos antes de usar map
                    weapons.map((element) => (
                        <div className="weapons_container">
                            <img className= "weapons" key={element.codigo} src={element.url_image} alt="weapons"  />

                            <div className="info_weapons">
                            <p className="price_weapons"> {element.precio}</p> 
                            </div>
                            </div>
                    ))
                ) : (
                    <p>Cargando datos...</p> // Mensaje mientras se cargan los datos
                )}
           

                </div>
        </div>
    )
}