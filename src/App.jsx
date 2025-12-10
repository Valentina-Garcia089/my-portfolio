import { useState } from 'react';
import Desktop from "./components/Desktop"

function App() {
  const [activeWindow, setActiveWindow] = useState(null); //Empieza siendo nulo
  const [isMinimized, setIsMinimized] = useState(false);

  function openWindow(name){
    //si ya hay una ventana abierta, se reemplaza por la nueva
    setActiveWindow(name);
    setIsMinimized(false);
  }

  function closeWindow(){
    setActiveWindow(null);
  }

  function minimizeWindow(){
    setIsMinimized(anterior => !anterior);
  }
  

  return (
    <div>
      {/* El estado debe ser pasado como prop */}
      <Desktop 
        activeWindow = {activeWindow}
        isMinimized = {isMinimized}
        openWindow = {openWindow}
        closeWindow = {closeWindow}
        minimizeWindow = {minimizeWindow}
      />
    </div>
  );
}

export default App
