import { useState } from 'react';
import Desktop from "./components/Desktop"

function App() {
  const [activeWindow, setActiveWindow] = useState(null); //Empieza siendo nulo
  const [isMinimized, setIsMinimized] = useState(false);

  // function openWindow(name){
  //   setActiveWindow(name);
  // }

  function openWindow(name){
    if (activeWindow === name){
      if (name === "Menu") {
        setIsMinimized(prev => !prev);
      }
      //si la ventana activa es la misma a la que se le hace click no hay cambio
      return;
    }

    //si la ventana activa es diferente a la que se le hace click, hay un cambio de ventanas
    setActiveWindow(name);
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
