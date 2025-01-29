import { useState } from "react"
import "./StyleRegister.css"

export default function Register({ closeModal }){

    const [dates, setDates]=useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const getData =(e)=>{
        console.log(dates)
    }


    return(
        <div className="container_register">

                <div className="input_register"> 

                <div className="close">
                <button className="close_register" onClick={closeModal}>X</button> 
                </div>

                <div className="img_avatar">
                     <img  className= "img_register" 
                     src="https://toppng.com/uploads/preview/file-svg-profile-icon-vector-11562942678pprjdh47a8.png" alt="avatar"  />
                     </div>

                    <div className="form">
                    <label htmlFor="title" className="label_modal">Username</label>
                    <input className="style_input" type= "text" placeholder="Name"  onChange={(e)=>setDates(e.target.value)}/>
                    <label htmlFor="title" className="label_modal">Email</label>
                    <input className="style_input" type= "email" placeholder="Email" onChange={(e)=>setDates(e.target.value)} />
                    <label htmlFor="title" className="label_modal">Password</label>
                    <input className="style_input" type= "password" placeholder="password" onChange={(e)=>setDates(e.target.value)}/>
                    <label htmlFor="title" className="label_modal">Confirm Password</label> 
                    <input className="style_input" type="password" placeholder="Confirmar Contraseña" onChange={(e)=>setDates(e.target.value)} />
                    
                </div>

                 <div className="btn">   
                <button className="btn_register" onClick={()=> {getData()}}>Register</button>
                </div>  

            </div>
            

        </div>

    )
}