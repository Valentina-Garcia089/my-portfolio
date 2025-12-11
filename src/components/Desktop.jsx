import Icon from "./Icon";
import Window from "./Window";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import Dock from "./Dock";
import DesktopBackground from "./DesktopBackground";
import { AnimatePresence } from "framer-motion";


function Desktop ({ activeWindow, isMinimized, openWindow, closeWindow, minimizeWindow }) {
    function renderActiveWindow() {
        if (!activeWindow || isMinimized) {
            return null;
        }

        const components = {
            About: <About />,
            Technologies: <Technologies />,
            Projects: <Projects />,
            Contact: <Contact />
        };

        return (
            //Window solo debe mostrar el contenido, no decidir lo que se muestra
            //window es dinamico y no siempre se muestra*

            //framer motion solo va animar sobre elementos distintos, o sea con keys
            <Window 
                key={activeWindow} 
                closeWindow={closeWindow}
                isMinimized={isMinimized}
            >
                {components[activeWindow]} {/* {children} de window */}
            </Window>
        );
    }



    return (
        <div className="desktop">
            <DesktopBackground />

            <div className="icon-grid">
                {/* si se hace click en el icono se abre la ventana: */}
                <Icon name="About" onOpen={() => openWindow("About")} />
                <Icon name="Technologies" onOpen={() => openWindow("Technologies")} />
                <Icon name="Projects" onOpen={() => openWindow("Projects")} />
                <Icon name="Contact" onOpen={() => openWindow("Contact")} />
            </div>

    
            <AnimatePresence mode="wait">
                {renderActiveWindow()}
            </AnimatePresence>


            {/*Dock no es opcional y siempre debe existir, solo cambia el icono, por eso no se trata como "Window" */}
            <Dock 
                activeWindow={activeWindow}
                minimizeWindow={minimizeWindow}
            />
        </div>
    );
}

export default Desktop