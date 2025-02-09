import { Box, Container, Typography, Button, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <div className="principal_Footer" >
      <Container
        sx={{
          minWidth: "100%",
          backgroundColor:"gray"
        }}
      >
        {/* Información de contacto */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Servicio al cliente
            </Typography>
            <Typography variant="body1">Lunes a viernes 9:00am - 6:00pm</Typography>
            <Typography variant="body1">Correo: escastr@gmail.com</Typography>
            <Typography variant="body1">Tel: 317250283</Typography>
          </Grid>

          {/* Redes sociales */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Síguenos en Redes Sociales
            </Typography>
            <Container>
              <Button
                variant="text"
                sx={{ color: "white", margin: "0 8px", fontSize: 30 }}
                onClick={() =>
                  window.location.href =
                    "https://www.instagram.com/esteban_castro_henao?igsh=MXdmODd5c2tpNnd0cg=="
                }
              >
                <InstagramIcon />
              </Button>

              <Button
                variant="text"
                sx={{ color: "white", margin: "0 8px", fontSize: 30 }}
                onClick={() => window.location.href = "https://www.whatsapp.com"}
              >
                <WhatsAppIcon />
              </Button>

              <Button
                variant="text"
                sx={{ color: "white", margin: "0 8px", fontSize: 30 }}
                onClick={() =>
                  window.location.href =
                    "https://www.facebook.com/profile.php?id=100006573377077"
                }
              >
                <FacebookIcon />
              </Button>
            </Container>
          </Grid>
        </Grid>

        {/* Información adicional o derechos */}
        <Typography
          variant="body2"
          sx={{ marginTop: 3, color: "gray", fontSize: "0.9rem" }}
        >
          © 2025 Esteban Castro. Todos los derechos reservados.
        </Typography>
      </Container>
    </div>
  );
}
