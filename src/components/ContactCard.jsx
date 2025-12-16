function ContactCard ({title, image, info}){
    return(
        <div className="contact-card">
            <div className="image-card">
                <img src={image} alt={`Icono de ${title}`} />
            </div>
            <span>{title}</span>
            <span>{info}</span>
        </div>
    )
}

export default ContactCard