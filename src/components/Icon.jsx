function Icon ({ name, onOpen, showLabel = true}){

    return (
        <div 
            className="icon" 
            onClick={onOpen}
        >
            <img src={`/icons/${name}.png`} alt={`Icono de ${name}`} />

            {showLabel && (
                <span>{name}</span>
            )}
        </div>
    )
}

export default Icon