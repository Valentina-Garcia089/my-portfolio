function TechnologieCard ({title, image}){

    return (
        <div className="techno-card">
            <div className="image-card">
                <img src={image} alt={`Icono de ${title}`} />
            </div>
            <span>{title}</span>
        </div>
    )
}

export default TechnologieCard