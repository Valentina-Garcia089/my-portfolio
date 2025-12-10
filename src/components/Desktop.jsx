import Icon from "./Icon";
import Window from "./Window";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import Dock from "./Dock";

function Desktop ({ activeWindow, isMinimized, openWindow, closeWindow, minimizeWindow }) {
    return (
        <div>
            {/* si se hace click en el icono se abre la ventana: */}
            <Icon name="about" onOpen={() => openWindow("about")} />
            <Icon name="technologies" onOpen={() => openWindow("technologies")} />
            <Icon name="projects" onOpen={() => openWindow("projects")} />
            <Icon name="contact" onOpen={() => openWindow("contact")} />

            {/* Window solo debe mostrar el contenido, no decidir lo que se muestra */}
            {/*window es dinamico y no siempre se muestra*/}
            {activeWindow === "about" && !isMinimized && (
                <Window closeWindow={closeWindow}>
                    <About />
                </Window>
            )}
            {activeWindow === "technologies" && !isMinimized &&(
                <Window closeWindow={closeWindow}>
                    <Technologies /> {/* {children} de window */}
                </Window>
            )}
            {activeWindow === "projects" && !isMinimized &&(
                <Window closeWindow={closeWindow}>
                    <Projects />
                </Window>
            )}
            {activeWindow === "contact" && !isMinimized &&(
                <Window closeWindow={closeWindow}>
                    <Contact />
                </Window>
            )}

            {/*Dock no es opcional y siempre debe existir, solo cambia el icono, por eso no se trata como "Window" */}
            <Dock 
                activeWindow={activeWindow}
                isMinimized ={isMinimized}
                minimizeWindow={minimizeWindow}
            />
        </div>
    );
}

export default Desktop