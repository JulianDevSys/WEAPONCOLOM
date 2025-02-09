import { useState, useEffect, useRef } from "react";
import Aos from "aos"
import Header from "./Header"
import getBestProducts from "../Hooks/getBestProducts";
import Footer from "./Footer";
import Menu from "./MenuDesplegable/Menu";
import "./StylePage.css"
import Container from '@mui/material/Container'
import { Box, Grid2, Typography } from "@mui/material";


export default function Page() {

  const [productos, setProductos] = useState([])
  const [bestproductos, setBestProductos] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const carruselRef = useRef(null)

  useEffect(() => {
    async function fetchBestProducts() {
      const data = await getBestProducts(); // Llamada a la API
      setBestProductos(data); // Establecer los mejores productos
    }

    fetchBestProducts(); // Llamada inicial
    const interval = setInterval(fetchBestProducts, 10000); // Actualiza cada 10 segundos
    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);


  useEffect(() => {
    let scrollDirection = 1; // 1 significa desplazarse hacia la derecha, -1 hacia la izquierda
    const scrollInterval = setInterval(() => {
      if (carruselRef.current) {
        // Desplazarse horizontalmente
        carruselRef.current.scrollLeft += scrollDirection;

        // Condición para verificar si llegó al final o al inicio
        if (carruselRef.current.scrollLeft + carruselRef.current.offsetWidth >= carruselRef.current.scrollWidth) {
          // Cambiar la dirección al llegar al final
          scrollDirection = -1;
        } else if (carruselRef.current.scrollLeft <= 0) {
          // Cambiar la dirección al llegar al inicio
          scrollDirection = 1;
        }
      }
    }, 30); // Velocidad de desplazamiento

    return () => clearInterval(scrollInterval); // Limpiar intervalo al desmontar
  }, []);


  useEffect(() => {
    async function obtenerProductosCompletos() {
      try {
        const url = "http://localhost:8000";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }

    Aos.init({ duration: 1000 });
    if (productos.length == 0) {
      obtenerProductosCompletos(); // Llama a obtenerProductos() dentro de useEffect()
    }
    getBestProducts()
    // No es necesario agregar 'obtenerProductos' a la lista de dependencias ya que no tiene dependencias externas
  }, []);


  const handleBusquedaChange = (event) => {
    const save = event.target.value;
    const done = save.charAt(0).toUpperCase() + save.slice(1);
    setBusqueda(done);
  };

  console.log(productos);
  const productosFiltrados = productos.filter((producto) => {
    return producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });

  return (
    <div className="prinicpal_container">


      <Grid2>


      <Box><Header /></Box>

      <Box maxWidth="xs">
      <Menu/>
      </Box>
  

      <Container className="container_carrusel">
      <Grid2>
        <Box>
          <Typography className="title_page">THE BEST WEAPONS</Typography></Box>
        <Container className="carousel-inner" ref={carruselRef}>
          {bestproductos && bestproductos.length > 0 ? (
            bestproductos.map((element, index) => (
              <Container className="carousel_item" key={index}>
                <img className="img_arms" src={element.url_image} alt="best_arms" />
              </Container>
            ))
          ) : (
            <p className="title_page">Cargando armas...</p>
          )}

        </Container>
        </Grid2>
      </Container>

      <Box>
          <Footer/>
      </Box>
  
      </Grid2>
    </div>
  )
}