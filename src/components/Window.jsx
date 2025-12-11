import { motion } from "framer-motion";

// children existe porque en Desktop se renderiza el componente especifico dentro de Window
function Window ({closeWindow, children}){
    const variants = {
        initial: { 
            opacity: 0, 
            scale: 0.9, 
            x: "-50%", 
            y: "-50%"
        },

        animate: {
            opacity: 1,
            scale: 1,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.25, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.2 }
        }
    };


    return (
        <motion.div 
            className="window"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="button-container">
                <button onClick={closeWindow}>✘</button>
            </div>

            <div className="window-content">
                {children} {/* about, projects,etc*/}
            </div>
        </motion.div>
    )
}

export default Window;