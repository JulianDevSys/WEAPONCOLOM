import { Box, Typography, Button, Grid } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./StylePerfilUser.css";  // Asegúrate de que este archivo CSS está en la misma carpeta o ruta correcta

export default function PerfilUser() {
  return (
    <Box className="container_info" >
      <Box className="containerPerfil">
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h4" sx={{ color: "white", paddingLeft: 2 }}>
            Esteban Castro
          </Typography>

          <Button sx={{ color: "white" }}>
            <LogoutIcon />
          </Button>
        </Grid>
      </Box>

      <Box className="container_two" sx={{
          backgroundColor:"black",
          width: "80%",
          height:"50%",
          borderRadius:"10px",
      }}>
        <Typography sx={{ 
          padding: 2, 
          color: "white",


           }}>Information</Typography>
      </Box>


    </Box>
  );
}
