import { a, button } from "framer-motion/client";

function ProjectCard({ title, description, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
}

export default ProjectCard;
