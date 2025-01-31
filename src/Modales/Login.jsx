import { useState } from "react"
import "./StyleLogin.css"


export default function Login({closeModal}){

    const [information, setInformation]=useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setInformation({
            ...information,
            [name]:value
        })
    }

    const handlesubmit=()=>{
        if(information.email== ""  || information.password==""){
            return alert("rellene los datos")
        }
        if(information.email.trim()== " "  || information.password.trim() ==" "){
            return "No pueden haber espacios"
        }
        alert(`tus datos son ${information.email} y ${information.name}`)
    }

 

    return(
        <div className="container_register">

            <div className="input_register"> 

                <div className="close">
                <button className="close_register" onClick={closeModal}>X</button> 
                </div>

            <div className="login">

            <div className="img_login">
            <img className="img_log" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV7teAdHYe9eHib7ZW-VA_3XiGIA3B3OqwQ&s" alt="imagen" />
            </div>

            <div className="input_form">
                <h1>Inicio Sesion</h1>
                <input className="login_inp" name= "email" type="email"   value= {information.email}   placeholder="email"  onChange={handleChange}/>
                <input className="login_inp" type= "password"  name= "password"  value={information.password} placeholder="password"  onChange={handleChange}/>

                <div className="btn">   
                <button className="btn_register" onClick={()=> handlesubmit()} >Login</button>
            </div>

        </div>
            
    </div>

           
            </div>

        </div>
    )
}