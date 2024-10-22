import artesust from './artesust.png'
import ecommerce from './ecommerce.png'
import tuCancha from './TuCancha.jpeg'

export const experience = [
    {
        id:1,
        name: "Artesust",
        description: "Desarrollo y diseño de página web de una clienta de profesión artista que se comunicó conmigo con el fin de realizar su página web para exponer sus obras y difundir su trabajo en el rubro. Las tecnologías usadas son React Js con Css nativo y publicado en Hosting.",
        img: artesust,
        link: 'https://www.artesust.com.ar/#/',
        githubRepository: 'https://github.com/NahuelSantos98/arte.sust'
    },
    {
        id:1,
        name: "Artesust",
        description: "Desarrollo y diseño de página web de una clienta de profesión artista que se comunicó conmigo con el fin de realizar su página web para exponer sus obras y difundir su trabajo en el rubro. Las tecnologías usadas son React Js con Css nativo y publicado en Hosting.",
        img: artesust,
        link: 'https://www.artesust.com.ar/#/',
        githubRepository: 'https://github.com/NahuelSantos98/arte.sust'
    }
]



export const projects = [
    {
        id: 1,
        name: "E-Commerce",
        description: 'Este proyecto lo realice como proyecto final para el curso de React.Js en Coder House, En este se utilizó la bilioteca anteriormente mencionada con CSS sin utilizar librerias externas y toda la gestion de productos y La gestión de productos, procesamiento de pedidos y funciones de compra se llevaron a cabo mediante la plataforma Firebase. Este proyecto esta desplegado en la plataforma en la nube Vercel',
        img: ecommerce,
        link: "https://ecommerce-react-js-nu.vercel.app/",
        githubRepository: 'https://github.com/NahuelSantos98/Ecommerce-ReactJs'
    },
    {
        id: 2,
        name: "Tu Cancha",
        description: 'Tu Cancha fue hecho en grupo donde desarrollé la parte del Front-end y fue presentado como proyecto final de la Tecnicartura "Professional Developer" de Digital House. Este es un gestor de canchas en el que como Dueño de un complejo de canchas (Administrador) podes manejar el CRUD de las canchas, visualizar las reservas y gestionar usuarios y sus roles (Tiene la potestad de cambiar de rol del Cliente a Operador). Como Operador puede manejar el CRUD de canchas y la visualización de reservas. En el caso del Cliente, este puede navegar en la aplicación libremente, ver el detalle de la cancha, la disponibilidad de horarios y días. Puede realizar reservas y visualizar el historial de reservas del mismo Cliente.\n Este no se encuentra mas desplegado en AWS.',
        img: tuCancha,
        // link: "https://ecommerce-react-js-nu.vercel.app/",
        githubRepository: 'https://gitlab.com/eltonarmelini.it/rtc-frontend'
    }
]