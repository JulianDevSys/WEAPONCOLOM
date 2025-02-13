import { useState } from "react"
import "./StyleLogin.css"
import { useNavigate } from "react-router"
import {Container, Box } from '@mui/material'
import { Grid2 } from "@mui/material"




export default function Login({closeModal}){

    const navigate=useNavigate()

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
        navigate("/LoginSession")
    }

 

    return(
        <Box className="container_register" sx={{
            display:"flex",
            height:"100vh",
            width:"100%",
            position: "absolute",
            backgroundColor: "rgba(192, 179, 179, 0.678)",
            justifyContent: "center",
            alignItems:"center",
            boxSizing: "border-box",
            zIndex: "5",
        }}>
    <Grid2>
            <Container maxWidth="md" sx={{
                zIndex: "1",
                backgroundColor:"white",
                borderRadius:"10px",
                padding:"15px"
     
            }}> 

                <div className="close">
                <button className="close_register" onClick={closeModal}>X</button> 
                </div>

              
            <Container className="login">

               

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
        
     
    </Container>
    

           
            </Container>
            </Grid2>

        </Box>
    )
}