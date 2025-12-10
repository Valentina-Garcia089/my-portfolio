import { useState } from 'react';
import Desktop from "./components/Desktop"

function App() {
  const [activeWindow, setActiveWindow] = useState(null); //Empieza siendo nulo

  function openWindow(name){
    //si ya hay una ventana abierta, se reemplaza por la nueva
    setActiveWindow(name);
  }

  function closeWindow(){
    setActiveWindow(null);
  }
  

  return (
    <div>
      {/* El estado debe ser pasado como prop */}
      <Desktop 
        activeWindow = {activeWindow}
        openWindow = {openWindow}
        closeWindow = {closeWindow}
      />
    </div>
  );
}

export default App
