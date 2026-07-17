import { useRef } from "react";
import DesktopBackground from "./DesktopBackground";
import Me from "../../public/introduction/Me.jpeg"

function Introduction ({changeScreen}){
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        
        //pos al centro del botón
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        //¿Cuanto se va a desplazar?
        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };




    const handleMouseLeave = () => {
        const button = buttonRef.current;
        if (!button) return;
        
        button.style.transform = "translate(0px, 0px)";
    };




    return (
        <section className="introduction">
            <div className="introduction-card">
                <DesktopBackground />
                <div className="info-container">
                    <div className="img-container">
                        <img src={Me} alt="Foto Valentina" />
                    </div>
                    <h2>Hi</h2>
                    <h2>I'm Valentina Garcia</h2>
                </div>

                <button 
                    onClick={changeScreen}
                    ref={buttonRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="magnetic-btn"
                >
                    Check out my portfolio
                </button>
            </div>
        </section>
    );

}

export default Introduction