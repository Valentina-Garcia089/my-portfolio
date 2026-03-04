import ProjectCard from "./ProjectCard";

function Projects (){
    const projects = [
        {
            title: "Portfolio",
            description: "Personal interactive portfolio that simulates an operating system, where each section opens in animated windows to show projects, technologies and the contact part",
            url: "https://my-portfolio-rho-ten-26.vercel.app/"
        },
        {
            title: "TuDespensa",
            description: "Frontend of a grocery list web application with JavaScript-based logic, user management features, and interface design, developed as part of a university project",
            url: "https://tuudespensa.netlify.app/"
        },
        {
            title: "Pixel Pomodoro",
            description: "Interactive pomodoro made in React with an animated pixel art pet that accompanies every focus and rest session. Designed as a practice of managing states and logic based on time",
            url: "https://pixel-pomodoro-39wm.vercel.app/"
        },
        {
            title: "BuscaTuVehiculo",
            description: "Full-stack vehicle management system featuring a Spring Boot API and a React frontend. It includes JWT-based authentication, role-based access control (Admin/User) and a PostgreSQL database to manage real-time inventory and customer inquiries",
            url: "https://vehiculos-front.vercel.app/"
        }
    ];


    return (
        <div className="projects-container">
            {/* recorrer el array tomando cada objeto y devuelve 3 projectCards*/}
            {projects.map(project => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                />
            ))}
        </div>
    );
}

export default Projects