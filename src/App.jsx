import { useState } from 'react';
import Desktop from "./components/Desktop"

function App() {
  const [activeWindow, setActiveWindow] = useState(null); //Empieza siendo nulo
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isShutdown, setIsShutdown] = useState(false);

  function openWindow(name){
    setActiveWindow(name);
    setIsMinimized(false);
    setMenuOpen(false);
  }


  function closeWindow(){
    setActiveWindow(null);
  }

  function minimizeWindow(){
    setIsMinimized(anterior => !anterior);
  }
  

  function openMenu (){
    setMenuOpen(prev => !prev);
    setActiveWindow(false);
  }

  function shutdown() {
    setIsShutdown(true);
  }

  return (
    <div>
      {/* El estado debe ser pasado como prop */}
      <Desktop 
        activeWindow = {activeWindow}
        isMinimized = {isMinimized}
        isMenuOpen = {isMenuOpen}
        isShutdown={isShutdown}
        openWindow = {openWindow}
        closeWindow = {closeWindow}
        minimizeWindow = {minimizeWindow}
        openMenu = {openMenu}
        shutdown={shutdown}
      />
    </div>
  );
}

export default App
