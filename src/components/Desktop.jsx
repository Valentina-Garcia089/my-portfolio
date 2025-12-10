import Icon from "./Icon";
import Window from "./Window";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import Dock from "./Dock";

function Desktop ({ activeWindow, openWindow, closeWindow }) {
    return (
        <div>
            {/* si se hace click en el icono se abre la ventana: */}
            <Icon name="about" onOpen={() => openWindow("about")} />
            <Icon name="technologies" onOpen={() => openWindow("technologies")} />
            <Icon name="projects" onOpen={() => openWindow("projects")} />
            <Icon name="contact" onOpen={() => openWindow("contact")} />

            {/* Window solo debe mostrar el contenido, no decidir lo que se muestra */}
            {/*window es dinamico y no siempre se muestra*/}
            {activeWindow === "about" && (
                <Window closeWindow={closeWindow}>
                    <About />
                </Window>
            )}
            {activeWindow === "technologies" && (
                <Window closeWindow={closeWindow}>
                    <Technologies />
                </Window>
            )}
            {activeWindow === "projects" && (
                <Window closeWindow={closeWindow}>
                    <Projects />
                </Window>
            )}
            {activeWindow === "contact" && (
                <Window closeWindow={closeWindow}>
                    <Contact />
                </Window>
            )}

            {/*Dock no es opcional y siempre debe existir, solo cambia el icono, por eso no se trata como "Window" */}
            <Dock activeWindow={activeWindow} />
        </div>
    );
}

export default Desktop