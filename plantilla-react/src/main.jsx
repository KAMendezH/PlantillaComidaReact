import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './header.jsx'
import Home from './Home/home.jsx'
import Menu from './Menu/menu.jsx'
import Contacto from './Contacto/contacto.jsx'
import Footer from './footer.jsx'
import BotonWhatsApp from './botonWhatsapp.jsx'






// IMAGENES
import logo from "./assets/img/Pizza.png" //Logo de Hero

import paquete_1 from "./assets/img/1.png" //Imagen de Paquete 1
import paquete_2 from "./assets/img/2.png" //Imagen de Paquete 2
import paquete_3 from "./assets/img/3.png" //Imagen de Paquete 3

// PRODUCTOS MENÚ




// INFORMACION DE ADMINISTRADOR
const telefono = "+525561369256"
const nombreNegocio = "EcoPizzas"
const textoHero = "¿A qué sabe el amor? Descubrelo en EcoPizzas"
const imgInicio = logo;
const ubicacion = 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3257.0156047217024!2d-98.98358544304018!3d19.412328695779753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e313bfdacf69%3A0xea1c81a6935eb711!2sGuerrero%20Chimalli!5e0!3m2!1ses!2smx!4v1745193855909!5m2!1ses!2smx";

const enlaces = [
  {
    nombre: "Facebook",
    enlace: "https://www.facebook.com/profile.php?id=61563336665877"
  },
  {
    nombre: "Instagram",
    enlace: "https://www.instagram.com/ki_infinity/"
  },
  {
    nombre: "Twitter",
    enlace: "https://www.instagram.com/ki_infinity/"
  },
  {
    nombre: "Instagram",
    enlace: "https://www.instagram.com/ki_infinity/"
  },
  {
    nombre: "Twitter",
    enlace: "https://www.instagram.com/ki_infinity/"
  }
]



// INFORMACION DE PAQUETES
const informacionPaquetes = [
  {
    nombrePaquete: "SUPREMO",
    precio: 150,
    imagen: paquete_1,
    descripcion: "1 Hamburguesa | 1 Pizza | 2 Refrescos",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de este paquete: "
  },

  {
    nombrePaquete: "ULTRA",
    precio: 100,
    imagen: paquete_2,
    descripcion: "2 Hamburguesas| 2 Papas fritas",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de este paquete: "
  },

  {
    nombrePaquete: "MEGA",
    precio: 300,
    imagen: paquete_3,
    descripcion: "1 Hot dog | 2 Aros de cebolla | 2 Helados",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de este paquete: "
  }

]


// INFORMACIÓN DE PRODUCTOS DE LA SECCIÓN MENÚ
const productos = [
  {
    seccion : "Alimentos",
    id: "1",
    nombre: "Hamburguesa sencilla",
    precio: 50,
    imagen: paquete_1,
    cantidad: 0
  },
  {
    seccion : "Bebidas",
    id: "2",
    nombre: "Refresco",
    precio: 20,
    imagen: paquete_2,
    cantidad: 0
  },
  {
    seccion : "Alimentos",
    id: "3",
    nombre: "Pizza",
    precio: 75,
    imagen: paquete_3,
    cantidad: 0
  },
  {
    seccion : "Alimentos",
    id: "4",
    nombre: "Hamburguesa Doble",
    precio: 90,
    imagen: paquete_1,
    cantidad: 0
  },
  {
    seccion : "Postres",
    id: "5",
    nombre: "Flan napolitano",
    precio: 10,
    imagen: paquete_2,
    cantidad: 0
  },
  {
    seccion : "Alimentos",
    id: "6",
    nombre: "Hamburguesa Triple con queso y pollo a la parrilla",
    precio: 60,
    imagen: logo,
    cantidad: 0
  }
]



//****** APP  *************
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    {/* CONTENEDOR PRINCIPAL */}
      <div className='contenedor_principal'>

        {/* HEADER */}
        <Header marca={ nombreNegocio } />


        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home logo = {imgInicio} paquetes={informacionPaquetes} textoHero={textoHero} />} />
          <Route path="/menu" element={<Menu productos={productos} tel={telefono} />} />
          <Route path="/contacto" element={<Contacto enlaces={enlaces} ubicacion={ubicacion} />} />
        </Routes>

        {/* BOTON WHATSAPP */}
        <BotonWhatsApp tel={telefono} mensaje="Hola, quiero información sobre tus productos" />
        {/* FOOTER */}
        
      </div>
      <Footer marca="EcoPizzas" año="2025"/>
    </BrowserRouter>
  </StrictMode>
)
