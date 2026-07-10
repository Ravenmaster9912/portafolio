// Define your translations
const translations = {
    en: {
        inicio: "Introducion",
        proyectos: "Projects",
        habilidades: "Skills",
        contacto: "Contact",
        saludo: "Hello, my name is Daniel",
        titulo: "I develop minimalist and efficient [span]web experiences[/span].",
        descripcion: "Im a  web fullstack developer, specializing in creating clean, modern interfaces with exceptional performance.",
        hablemos: "Let's talk",
        proyectos_destacados:"Featured Projects",
        moodle_descripcion: "University platform that manages categories, courses and Moodle groups and implements automated registration.",
        moodle_link: "(Private Project)",
        mips_descripcion: "Verilog processor that simulates the MIPS architecture.",
        proyecto_link: "View GitHub repository →",
        sgi_titulo: "Inventory management system",
        sgi_descripcion: "Application for managing the inventory of computer components and personnel.",
        particulas_titulo: "Particles registry",
        particulas_descripcion: "Desktop program in which the use of graphics is implemented to calculate the distance of particles.",
        sgll_titulo: "Call management system",
        sgll_descripcion: "Call center and staff management application.",
        tecnologias: "Tech Stack",
        contacto_titulo: "¿Do you have a project in mind?",
        contacto_descripcion: "I'm available for freelance or full-time work. If you're looking for a detail-oriented person who values clean design and well-structured code, please get in touch.",
        correo: "Send an email",
        p2g_descripcion: "Real-time shared drawing application. (In development)"
    },
    es: {
        inicio: "Inicio",
        proyectos: "Proyectos",
        habilidades: "Habilidades",
        contacto: "Contacto",
        saludo: "Hola, mi nombre es Daniel",
        titulo: "Desarrollo [span]experiencias web[/span] minimalistas y eficientes.",
        descripcion: "Soy un desarrollador web fullstack, especializado en crear interfaces limpias, modernas y con un rendimiento excepcional.",
        hablemos: "Hablemos",
        proyectos_destacados:"Proyectos Destacados",
        moodle_descripcion: "Plataforma universitaria que gestiona categorias, cursos y grupos de moodle e implementa automatizacion de registros.",
        moodle_link: "(Proyecto Privado)",
        mips_descripcion: "Procesador en verilog que simula la arquitectura MIPS.",
        proyecto_link: "Ver repositorio GitHub →",
        sgi_titulo: "Sistema de gestión de inventario",
        sgi_descripcion: "Aplicación de gestión de inventario de componentes de computo y personal.",
        particulas_titulo: "Registro de particulas.",
        particulas_descripcion: "Programa de escritorio en el cual se implemente el uso de grafos para calcular la distancia de particulas.",
        sgll_titulo: "Sistema de gestión de llamadas.",
        sgll_descripcion: "Aplicación de gestión de llamadas y personal de call center.",
        tecnologias: "Tecnologías",
        contacto_titulo: "¿Tienes un proyecto en mente?",
        contacto_descripcion: "Estoy disponible para trabajos freelance o puestos de tiempo completo. Si buscas a alguien detallista que valore el diseño limpio y el código bien estructurado, escríbeme.",
        correo: "Enviar un correo",
        p2g_descripcion: "Aplicación de dibujo compartido en tiempo real. (En desarrollo)"
    }
};

// Function to switch language contents
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if(key == "titulo"){

                let textoTraducido = translations[lang][key];

                textoTraducido = textoTraducido.replace('[span]', '<span>').replace('[/span]', '</span>');

                element.innerHTML = textoTraducido;
            }
            else{
                element.innerText = translations[lang][key];
            }
        }
    });
}
