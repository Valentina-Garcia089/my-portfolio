import Icon from "./Icon";

function Dock ({activeWindow, isMinimized, minimizeWindow}){

    const dockIcon = {
            about: "about",
            technologies: "technologies",
            projects: "projects",
            contact: "contact"
    };

    const busca = dockIcon[activeWindow];

    return (
        <div className="dock">
            {/*si el nombre de la ventana activa coincide con uno de los nombres de ventana en dockIcon: */}
            {busca && (
                <Icon 
                    name={busca} 
                    showLabel={false}
                    onOpen={minimizeWindow} //cambio de comportamiento para onOpen
                />
            )}
        </div>
    )
}

export default Dock