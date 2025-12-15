import ProjectCard from "./ProjectCard";

function Projects (){
    const projects = [
        {
            title: "Portfolio",
            image: "/projects/portfolio.png",
            description: "Mi portfolio personal con interfaz tipo desktop",
            url: "https://tusitio.com"
        },
        {
            title: "TuDespensa",
            image: "/projects/tudespensa.png",
            description: "App para gestión de despensa",
            url: "https://tuudespensa.netlify.app/"
        },
        {
            title: "Pixel Pomodoro",
            image: "/projects/pomodoro.png",
            description: "Descripción corta",
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