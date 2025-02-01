import { useState } from "react"
import "./StyleRegister.css"

export default function Register({ closeModal }){

    const [dates, setDates]=useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange =(e)=>{
        const {name,value}=e.target
        setDates({
            ...dates,
            [name]:value
        })
    }


    const handleSubmit=()=>{
        if(dates.password="" || dates.confirmPassword== "" || dates.email== "" || dates.name== ""){
            return  alert("No field can be empty")
        }

        if(dates.email.trim()== "" || dates.name.trim()== ""){
            return  alert("You can't leave space")
        }


        if(dates.password != dates.confirmPassword){
            return alert("Passwords do not match")
        }

        if (!validatePassword(dates.password)) {
            return alert("Password must be at least 8 characters long and contain uppercase, lowercase, a number, and a special character.");
          }


        return alert("SUCCESSFUL RECORD")
    }

    // validaciones agregadas
    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
      };


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
                    <input className="style_input" type= "text"  name= "name"  value={dates.name} placeholder="Name"  onChange={handleChange}/>
                    <label htmlFor="title" className="label_modal">Email</label>
                    <input className="style_input" type= "email"  name= "email"  value={dates.email}   placeholder="Email" onChange={handleChange} />
                    <label htmlFor="title" className="label_modal">Password</label>
                    <input className="style_input" type= "password" name= "password"  value={dates.password} placeholder="password" onChange={handleChange}/>
                    <label htmlFor="title" className="label_modal">Confirm Password</label> 
                    <input className="style_input" type="password" name= "confirmPassword"  value={dates.confirmPassword}  placeholder="Confirmar Contraseña" onChange={handleChange} />
                    
                </div>

                 <div className="btn">   
                <button className="btn_register" onClick={ handleSubmit}>Register</button>
                </div>  

            </div>
            

        </div>

    )
}