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
            title: "C++",
            image: "/technologies/c.png",
        },
        {
            title: "PostgreSQL",
            image: "/technologies/postgresql.png",
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