import Icon from "./Icon";

function Dock ({activeWindow, minimizeWindow, openWindow}){

    if(!activeWindow){
        return <div className="dock">
            <Icon 
                name="Menu"
                showLabel={false}
                onOpen={() => openWindow("Menu")}
            />
        </div>
    }


    return (
        <div className="dock">
            <Icon 
                name="Menu"
                showLabel={false}
                onOpen={minimizeWindow}
            />

            {activeWindow !== "Menu" &&(
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