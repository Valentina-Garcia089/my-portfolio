function ContactCard({ title, type, image, info }) {

    function getHref() {
        switch (type) {
        case "email":
            return `mailto:${info}`;
        case "phone":
            return `tel:+57${info}`;
        case "url":
            return info;
        default:
            return null;
        }
    }

    const href = getHref();

    const content = (
        <>
            <div className="image-card">
                <img src={image} alt={`Icono de ${title}`} />
            </div>

            <div className="contact-text">
                <span>{title}</span>
                <span>{info}</span>
            </div>
        </>
    );

    return href ? (
        <a
        href={href}
        className="contact-card"
        target={type === "url" ? "_blank" : undefined}
        rel="noopener noreferrer"
        >
            {content}
        </a>
    ) : (
        <div className="contact-card">{content}</div>
    );
}

export default ContactCard;
