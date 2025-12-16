import { div } from "framer-motion/client";
import ContactCard from "./ContactCard";

function Contact (){
    const contacts = [
        {
            title: "Email",
            image: "/contact/email.png",
            info: "valentinagarciag089@gmail.com"
        },

        {
            title: "GitHub",
            image: "/contact/github.png",
            info: "https://github.com/Valentina-Garcia089?tab=repositories"
        },

        {
            title: "Phone",
            image: "/contact/phone.png",
            info: "3164489804"
        }
    ]


    return (
        <div className="content contact-container">
            {contacts.map(contact => (
                <ContactCard 
                    key={contact.title}
                    title={contact.title}
                    image={contact.image}
                    info={contact.info}
                />
            ))}

        </div>
    );
}

export default Contact