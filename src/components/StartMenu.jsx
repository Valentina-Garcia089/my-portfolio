import { motion, AnimatePresence } from "framer-motion";

function StartMenu() {

    return (
        <motion.div
            className="start-menu"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.1 }}
            >
            <button className="power-btn">Apagar</button>
        </motion.div>
    );
}

export default StartMenu;
