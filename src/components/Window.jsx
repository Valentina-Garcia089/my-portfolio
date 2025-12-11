// children existe porque en Desktop se renderiza el componente especifico dentro de Window
function Window ({closeWindow, children}){
    return (
        <div className="window">
            <div className="button-container">
                <button onClick={closeWindow}>✘</button>
            </div>

            <div className="window-content">
                {children} {/* about, projects,etc*/}
            </div>
        </div>
    )
}

export default Window;