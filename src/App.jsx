import { useState } from 'react';
import Introduction from './components/Introduction';
import Desktop from "./components/Desktop"

function App() {
  const [isIntroductionShowed, setIsIntroductionShowed] = useState(true);
  const [activeWindow, setActiveWindow] = useState(null); //Empieza siendo nulo
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isShutdown, setIsShutdown] = useState(false);

  function changeScreen(){
    setIsIntroductionShowed(false);
  }

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

      {isIntroductionShowed ? (
        <Introduction 
          changeScreen = {changeScreen}
        />
      ) : (

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
        )}
    </div>
  );
}

export default App
