import { useState } from "react"
import { TextField, Button, Box, Container, Typography, IconButton, Grid, Grid2} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
        
        <Box className="container_register" sx={{ 
            display:"flex",
            height:"100vh",
            width:"100%",
            position: "absolute",
            backgroundColor: "rgba(192, 179, 179, 0.678)",
            justifyContent: "center",
            alignItems:"center",
            boxSizing: "border-box",
            zIndex:"1",

        }}>

        <Grid2>
        <Container maxWidth="sm" sx={{
           zIndex: "1",
           backgroundColor:"white",
           borderRadius:"10px",
           padding:"15px"

        }} >
          
          <Box sx={{
            display:"flex",
            justifyContent:"flex-end",
            width:"100%",
          }}>
          <IconButton className="close"
            onClick={closeModal}>
            <CloseIcon />
          </IconButton>
            
          </Box>

  
          {/* Avatar */}
          <Box className="img_avatar">
            <img
              className="img_register"
              src="https://toppng.com/uploads/preview/file-svg-profile-icon-vector-11562942678pprjdh47a8.png"
              alt="avatar"
            />
          </Box>
  
        <Grid container>
        <form onSubmit={handleSubmit} >
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={dates.name}
              onChange={handleChange}
              sx={{ backgroundColor: 'white', borderRadius: 1 }}
            />
  
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={dates.email}
              onChange={handleChange}
              type="email"
              sx={{ backgroundColor: 'white', borderRadius: 1 }}
            />
  
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={dates.password}
              onChange={handleChange}
              type="password"
              sx={{ backgroundColor: 'white', borderRadius: 1 }}
            />
  
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="confirmPassword"
              value={dates.confirmPassword}
              onChange={handleChange}
              type="password"
              sx={{ backgroundColor: 'white', borderRadius: 1 }}
            />
  
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: '10px' }}
              >
                Register
              </Button>
            </Box>
          </form>
        </Grid>
          
        </Container>
        </Grid2>
      </Box>

    )
}