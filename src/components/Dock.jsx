import Icon from "./Icon";

function Dock ({activeWindow, isMinimized, minimizeWindow}){

    if(!activeWindow){
        return <div className="dock"></div>
    }


    return (
        <div className="dock">
            <Icon 
                name={activeWindow} 
                showLabel={false}
                onOpen={minimizeWindow} //cambio de comportamiento para onOpen
            />
        </div>
    )
}

export default Dock