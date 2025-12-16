import Icon from "./Icon";
import Window from "./Window";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import Dock from "./Dock";
import DesktopBackground from "./DesktopBackground";
import { AnimatePresence, motion } from "framer-motion";


function Desktop ({ activeWindow, isMinimized, isMenuOpen, isShutdown, openWindow, closeWindow, minimizeWindow, openMenu, shutdown }) {
    
    function renderActiveWindow() {
        if (!activeWindow) {
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

            {isShutdown && (
                <AnimatePresence>
                    {isShutdown && (
                        <motion.div
                        className="shutdown-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        //para implementar proximamente
                        // exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Shutting down...
                        </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            {isShutdown ===false && (
                <>
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
                        openMenu={openMenu}
                        isMenuOpen={isMenuOpen}
                        shutdown={shutdown}
                    />
                </>
            )}

        </div>
    );
}

export default Desktop