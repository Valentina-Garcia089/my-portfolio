import TechnologieCard from "./TechnologieCard";


function Technologies (){
    const technologies = [
        {
            title: "HTML",
            image: "/technologies/html.png",
        },
        {
            title: "CSS",
            image: "/technologies/css.png",
        },
        {
            title: "Java Script",
            image: "/technologies/javaScript.png",
        },
        {
            title: "React",
            image: "/technologies/react.png",
        },
        {
            title: "Java",
            image: "/technologies/java.png",
        },
        {
            title: "Spring Boot",
            image: "/technologies/springBoot.png",
        },
        {
            title: "C++",
            image: "/technologies/c.png",
        },
        {
            title: "C#",
            image: "/technologies/cSharp.png",
        },
        {
            title: "Python",
            image: "/technologies/Python.webp",
        },
        {
            title: "PostgreSQL",
            image: "/technologies/postgresql.png",
        },
        {
            title: "n8n",
            image: "/technologies/n8n.png",
        }
    ];

    return (
        <div className="content tech-container">
            {technologies.map(technologie => (
                <TechnologieCard 
                    key={technologie.title}
                    title={technologie.title}
                    image={technologie.image}
                />
            ))}
        </div>
    )
}

export default Technologies