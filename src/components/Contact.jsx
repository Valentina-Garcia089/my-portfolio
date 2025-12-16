import { div } from "framer-motion/client";
import ContactCard from "./ContactCard";

function Contact (){
    const contacts = [
        {
            title: "Email",
            type: "email",
            image: "/contact/email.png",
            info: "valentinagarciag089@gmail.com"
        },

        {
            title: "GitHub",
            type: "url",
            image: "/contact/github.png",
            info: "https://github.com/Valentina-Garcia089?tab=repositories"
        },

        {
            title: "Phone",
            type: "phone",
            image: "/contact/phone.png",
            info: "3164489804"
        }
    ]


    return (
        <div className="content contact-container">
            {contacts.map(contact => (
                <ContactCard 
                    key={contact.title}
                    type={contact.type}
                    title={contact.title}
                    image={contact.image}
                    info={contact.info}
                />
            ))}

        </div>
    );
}

export default Contact