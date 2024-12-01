import artesust from './artesust.png'
import ecommerce from './ecommerce.png'
import tuCancha from './TuCancha.jpeg'
import odontologia from './odontologia.png'

export const experience = [
    {
        id:1,
        name: "Programación Backend I: Desarrollo Avanzado de Backend",
        description: 'Este curso, impartido por Coder House y certificado por empresas como PedidosYa, Pomelo, Tiendanube y Bitso, me permitirá ampliar mis conocimientos en el ecosistema Node.js y JavaScript. Aprenderé a dominar desde ES5 hasta ES11, programar de forma asincrónica en el servidor, y utilizar frameworks como Express y Handlebars. También adquiriré habilidades para crear APIs RESTful, manejar Websockets, y trabajar con MongoDB, tanto desde la consola como con Mongoose. Finalmente, implementaré proyectos en la nube usando plataformas como Heroku, Glitch y MongoAtlas.',
        duration: "10/2024 - 12/2024",
        // certificate: "",
        sabermas: "https://www.coderhouse.com/ar/online/programacion-backend-desarrollo-avanzado-de-backend"
    },
    {
        id: 2,
        name: "Professional Developer - Digital House",
        description: "Esta tecnicatura, certificada por empresas como MELI y Globant, te introduce al mundo IT y al desarrollo web con las últimas tecnologías. Durante la cursada, aprendí sobre: HTML, CSS, JavaScript, React.js, Diseño UX/UI, Design Thinking, bases de datos SQL, POO en Java, Backend con Java y Spring Boot, Testing, y Git, manejando tanto GitHub como GitLab.\nEn cuanto al desarrollo profesional, adquirí conocimientos en Learning Agility, metodologías ágiles como Scrum, comunicación efectiva y diversas herramientas de trabajo colaborativo.",
        duration: "02/2023 - 10/2024",
        certificate: 'https://drive.google.com/file/d/1SnzCwjxHaOXp2bk7m623kgGFw5RoP7z-/view?usp=sharing',
        sabermas: "https://www.digitalhouse.com/ar/productos/programacion/professional-developer?utm_source=Google&utm_medium=paidsearch&utm_campaign=Inscripcion&utm_term=OnDemand&utm_content=membresia-ctdmember-membresia-membresia-adresponsive-suscripcion-kw-none-customkws-adtext-none-customkws-ad1-ar-search&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0csk2OlN0WvwGsaPBmDkknVgwMVdxUlIXv5Ssee02LUGc94b0srTWNGkaApYUEALw_wcB"
    },
    {
        id: 3,
        name: "React Js - Coder House",
        description: "Este curso, certificado por empresas como PedidosYa, Pomelo, Tiendanube y Bitso, me permitió adquirir conocimientos profundos sobre React.js, enfocándome en su programación basada en componentes, el flujo de datos, el manejo del Virtual DOM, el uso de hooks y la sintaxis JSX, entre otros aspectos clave. Asimismo, aprendí a utilizar Firestore Database de la plataforma Firebase para gestionar bases de datos de manera eficiente.",
        duration: "12/2023 - 01/2024",
        certificate: "https://www.coderhouse.com/ar/certificados/65d35cb806d801b8106e2e38?lang=",
        sabermas: "https://www.coderhouse.com/ar/online/reactjs"
    }
]


export const projects = [
    {
        id: 1,
        name: "Artesust",
        description: "Mi primera experiencia laboral como freelance consistió en el desarrollo y diseño de una página web para mi mamá que es artista. Al ser un familiar tenía el doble de presión para que la página quede perfecta. Ella me pidió una página personal donde el fin era poder exponer sus obras y difundir su trabajo en el rubro. \nLas tecnologías utilizadas fueron React Js con CSS nativo, la página fue publicada en un hosting. \nEsta sigue activa y con ella hacemos seguimientos semanales con Google Analytics y cambios que solicité con el tiempo.",
        img: artesust,
        link: 'https://www.artesust.com.ar/#/',
        githubRepository: 'https://github.com/NahuelSantos98/arte.sust'
    },
    {
        id: 2,
        name: "Tu Cancha",
        description: 'Tu Cancha fue un proyecto grupal presentado como trabajo final de la Tecnicatura "Professional Developer" en Digital House, donde me encargué del Front-end. \nEs un gestor para administrar complejos deportivos donde los dueños (Administradores) pueden gestionar el CRUD de canchas, visualizar reservas y administrar usuarios y roles, permitiendo cambiar de Cliente a Operador. \nLos Operadores manejan el CRUD de canchas y las reservas. \nLos Clientes pueden navegar por la app, ver detalles de canchas, consultar disponibilidad, hacer reservas y revisar su historial. \nActualmente, se está trabajando para desplegarlo en una nueva plataforma debido a que tuvimos problemas con AWS.',
        img: tuCancha,
        // link: "https://ecommerce-react-js-nu.vercel.app/",
        githubRepository: 'https://gitlab.com/eltonarmelini.it/rtc-frontend'
    },
    {
        id: 3,
        name: "E-Commerce",
        description: 'Este E-commerce lo realicé como proyecto final para el curso de React.Js en Coder House. \nEn él utilicé la mencionada bibVercela junto con CSS sin librerías externas. \nLa aplicación incluye la gestión de productos, el procesamiento de pedidos y funciones de compra, todas conectadas a Firestore Database de la plataforma Firebase para el almacenamiento y gestión de datos. \nEl proyecto está desplegado en Vercel, una plataforma en la nube que facilita el despliegue rápido y eficiente de aplicaciones web.',
        img: ecommerce,
        link: "https://ecommerce-react-js-nu.vercel.app/",
        githubRepository: 'https://github.com/NahuelSantos98/Ecommerce-ReactJs'
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


