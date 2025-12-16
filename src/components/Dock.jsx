import Icon from "./Icon";
import StartMenu from "./StartMenu";
import { AnimatePresence } from "framer-motion";

function Dock ({activeWindow, minimizeWindow, openMenu, isMenuOpen, shutdown}){
    return (
        <div className="dock">
            <AnimatePresence>
                {isMenuOpen && <StartMenu shutdown={shutdown} />}
            </AnimatePresence>

            <Icon 
                name="Menu"
                showLabel={false}
                onOpen={openMenu}
            />

            {activeWindow &&(
                <Icon 
                    name={activeWindow} 
                    showLabel={false}
                    onOpen={minimizeWindow} //cambio de comportamiento para onOpen
                />
            )}
        </div>
    )
}

export default Dock