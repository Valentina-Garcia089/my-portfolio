function ProjectCard({ title, image, description, url }) {
    return (
        <a
            href={url}
            target="_blank" //Abrir el proyecto en una ventana diferente
            rel="noopener noreferrer"
            className="project-card"
        >
            {/*primera vista*/}
            <div className="card-front">
                <div className="image-container">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
            </div>

            {/*vista de atras con el hover*/}
            <div className="card-back">
                <p>{description}</p>
            </div>
        </a>
    );
}

export default ProjectCard;
