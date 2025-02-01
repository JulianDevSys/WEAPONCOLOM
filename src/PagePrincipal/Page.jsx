import { useState, useEffect, useRef} from "react";
import Aos from "aos"
import Header from "./Header"
import "./StylePage.css"

export default function Page(){

  const [bestProducts,setBestProducts]=useState([])
  const[productos,setProductos]=useState([])
  const [busqueda, setBusqueda]=useState("")
  const carruselRef=useRef(null)


  const getBestProducts =  async() => {
      const result = await fetch('http://localhost:8000/get/bestweapons')
      if(result.ok){
        const bests =  await result.json()
        setBestProducts(bests)  
      }
    };
  
  const intervale = ()=>{
      setInterval(getBestProducts,10000)
    }

    useEffect(() => {
      const scrollInterval = setInterval(() => {
          if (carruselRef.current) {
              // Realiza el scroll horizontal automáticamente
              carruselRef.current.scrollLeft += 1;
              if (
                carruselRef.current.scrollLeft + carruselRef.current.offsetWidth >=
                carruselRef.current.scrollWidth
              ) {
                  // Reinicia el scroll al inicio si llega al final
                  carruselRef.current.scrollLeft = 0;
              }
          }
      }, 30); // Velocidad de scroll
      return () => clearInterval(scrollInterval); // Limpia el intervalo al desmontar
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
      if(productos.length==0){
        obtenerProductosCompletos(); // Llama a obtenerProductos() dentro de useEffect()
      }
     getBestProducts();
     intervale()
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
    function IngresarUsuario() {} 


    return(
        <div className="prinicpal_container">

        <div>
        <Header/>
        </div>

    <div className="container_carrusel">

      <div>
      <h1>THE BEST WEAPONS</h1></div>

        <div className="carousel-inner" ref={carruselRef}>
            {bestProducts.map((element, index)=>(
              <div className="carousel_item " >
                
                <img  className="img_arms" key={index} src={element.url_image} alt="best_arms"></img>
              </div>
            ))}

          </div>
          </div>



        </div>
    )
}