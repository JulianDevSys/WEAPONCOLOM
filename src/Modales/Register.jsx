import "./StyleRegister.css"

export default function Register({ closeModal }){
    return(
        <div className="container_register">

                <div className="input_register"> 
                <button onClick={closeModal}>X</button>
                    <input className="style_input" type= "text" placeholder="Name" />
                    <input className="style_input" type= "email" placeholder="Email" />
                    <input className="style_input" type= "password" placeholder="password" /> 
                    <input className="style_input" type="password" placeholder="Confirmar Contraseña" /> 
                <button>Register</button>
                </div>
            

            </div>

    )
}