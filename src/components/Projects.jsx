import ProjectCard from "./ProjectCard";

function Projects (){
    const projects = [
        {
            title: "Portfolio",
            image: "/projects/portfolio.png",
            description: "Portafolio personal interactivo que simula un sistema operativo, donde cada sección se abre en ventanas animadas para mostrar proyectos, tecnologías y contacto",
            url: "https://tusitio.com"
        },
        {
            title: "TuDespensa",
            image: "/projects/tudespensa.png",
            description: "Frontend de una aplicación web de listas de supermercado, con lógica en JavaScript, manejo de usuarios y diseño de interfaz, desarrollado como proyecto universitario",
            url: "https://tuudespensa.netlify.app/"
        },
        {
            title: "Pixel Pomodoro",
            image: "/projects/pomodoro.png",
            description: "Pomodoro interactivo hecho en React, con una mascota en pixel art animada que acompaña cada sesión de enfoque y descanso. Diseñado como práctica de manejo de estado y lógica basada en tiempo",
            url: "https://pixel-pomodoro-39wm.vercel.app/"
        }
    ];


    return (
        <div className="projects-container">
            {/* recorrer el array tomando cada objeto y devuelve 3 projectCards*/}
            {projects.map(project => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    url={project.url}
                />
            ))}
        </div>
    );
}

export default Projects