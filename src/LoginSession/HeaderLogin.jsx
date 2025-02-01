import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { useState } from "react";


export default function Header() {
    const [modal, setModal] = useState([]);

    return (
        <div className="Container_Header">
            <div className="header">
                <div className="logo_page">
                    <img className="Container_header__imageLOGO" /* src={image} */ alt="image logo" />
                </div>

                <div className="title">
                    <p className="editTitle">WEAPON COLOM</p>
                </div>

                <div className="Container_Header__modals">

                    {/* Icono de carrito de compras */}
                    <div className="iconos">
                        <BsFillCartFill className="Container_Header__buscar" onClick={() => alert('Carrito de compras abierto')} />
                    </div>

                    {/* Icono de perfil */}
                    <div className="iconos">
                        <BsPerson className="Container_Header__buscar" onClick={() => setModal(<Register closeModal={() => setModal([])} />)} />
                    </div>

                    
            
                </div>
                {modal}
            </div>
        </div>
    );
}
