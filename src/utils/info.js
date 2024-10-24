import artesust from './artesust.png'
import ecommerce from './ecommerce.png'
import tuCancha from './TuCancha.jpeg'
import odontologia from './odontologia.png'

export const experience = [
    {
        id: 1,
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
        name: "Artesust",
        description: "Mi primera experiencia laboral como freelance consistió en el desarrollo y diseño de una página web para una clienta artista. Ella se comunicó conmigo con el fin de exponer sus obras y difundir su trabajo en el rubro. Las tecnologías utilizadas fueron React Js con CSS nativo, y la página fue publicada en un hosting. Esta sigue activa y con la clienta hacemos seguimientos semanales con Google Analytics.",
        img: artesust,
        link: 'https://www.artesust.com.ar/#/',
        githubRepository: 'https://github.com/NahuelSantos98/arte.sust'
    },
    {
        id: 2,
        name: "E-Commerce",
        description: 'Este proyecto lo realice como proyecto final para el curso de React.Js en Coder House, En este se utilizó la bilioteca anteriormente mencionada con CSS sin utilizar librerias externas y toda la gestion de productos y La gestión de productos, procesamiento de pedidos y funciones de compra se llevaron a cabo mediante la plataforma Firebase. Este proyecto esta desplegado en la plataforma en la nube Vercel.',
        img: ecommerce,
        link: "https://ecommerce-react-js-nu.vercel.app/",
        githubRepository: 'https://github.com/NahuelSantos98/Ecommerce-ReactJs'
    },
    {
        id: 3,
        name: "Tu Cancha",
        description: 'Tu Cancha fue hecho en grupo donde desarrollé la parte del Front-end y fue presentado como proyecto final de la Tecnicartura "Professional Developer" de Digital House. \nEste es un gestor de canchas en el que como Dueño de un complejo de canchas (Administrador) podes manejar el CRUD de las canchas, visualizar las reservas y gestionar usuarios y sus roles (Tiene la potestad de cambiar de rol del Cliente a Operador). \nComo Operador puede manejar el CRUD de canchas y la visualización de reservas. \nEn el caso del Cliente, este puede navegar en la aplicación libremente, ver el detalle de la cancha, la disponibilidad de horarios y días. Puede realizar reservas y visualizar el historial de reservas del mismo Cliente.\n Este no se encuentra más desplegado en AWS (Actualmente se está trabajando para el despliegue en otra plataforma).',
        img: tuCancha,
        // link: "https://ecommerce-react-js-nu.vercel.app/",
        githubRepository: 'https://gitlab.com/eltonarmelini.it/rtc-frontend'
    },
    {
        id:4,
        name: "Odontologia backend",
        img: odontologia, 
        description: 'Este proyecto es un manejador backend que gestiona tres entidades principales: Paciente, Odontólogo y Turno. Además, se incluye la entidad Domicilio, que está directamente asociada a Paciente. Con estas entidades, se puede llevar a cabo un CRUD completo. \nEl desarrollo se realizó utilizando Java con Spring y Spring Boot, así como Maven y Hibernate. Para la gestión de la base de datos, se utiliza H2 Database, mientras que la documentación se genera a través de Swagger. \nEste proyecto está basado en el patrón de diseño MVC (Modelo-Vista-Controlador), y también implementa el patrón DTO (Data Transfer Object) utilizando JPA. Para la interacción con el ORM, se emplea ModelMapper.',
        // link: '',
        githubRepository: 'https://github.com/NahuelSantos98/Java-Backend-odontologia'
    }
]

export const frontend = [
    { name: "HTML", url: "https://i.ibb.co/P6JZZBd/html.png" },
    { name: "CSS", url: "https://i.ibb.co/2KZcPvH/css.png" },
    { name: "JavaScript", url: "https://i.ibb.co/FBkxQWZ/js.png" },
    { name: "React", url: "https://i.ibb.co/5KJfbFW/react.png" },
    { name: "Vite", url: "https://i.ibb.co/pW0GLBK/vite.png" },
    { name: "Git", url: "https://i.ibb.co/vP7T4Bs/git.png" }
];


export const backend = [
    { name: "Java", url: "https://i.ibb.co/wsYqLy1/java.png" },
    { name: "Node", url: "https://i.ibb.co/t27vb9x/node.png" },
    { name: "Express", url: "https://i.ibb.co/hdrxQfH/express.png" },
    { name: "MongoDB", url: "https://i.ibb.co/hcBCC9K/mongo.png" },
    { name: "SQL", url: "https://i.ibb.co/qWnGH8F/sql.png" },
    { name: "Postman", url: "https://i.ibb.co/5xCbqD1/postman.png" }
];


