import React, {useState} from 'react';
import styled from 'styled-components';

import menuIcon from '../../assets/menu-icon.svg';
import closeIcon from '../../assets/close-icon.svg';


const MenuPanelCont = styled.div`
  display: block;
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0 -24px;
  opacity: ${props=>props.opacity};
  z-index: ${props=>props.zIndex};
  background-color: rgba(0,0,0,.25);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease-in-out;
`;
const MenuPanel = styled.div`
  position: fixed;
  right: ${props=>props.right}px;
  opacity: ${props=>props.opacity};
  transition: right 0.5s ease-in-out 0.3s;
`;

export default function Navbar() {

  const [menuState, setMenuState] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [zIndex, setzIndex] = useState(false);
  
  const HandleClick = () => {
      setMenuState(!menuState);
      setOpacity(!opacity);
      setzIndex(!zIndex);
  }

  return <div className='navbar-cont'>
    {/* mobile menu panel */}
  <MenuPanelCont 
    className='menu-panel-cont'
    opacity = {opacity ? 1 : 0}
    zIndex = {zIndex ? 5 : -5}>

    <MenuPanel className='menu-panel'
      right = {menuState ? 0 : -300}
      opacity = {opacity ? 1 : 0}>

      <img className='close-icon'
      src={closeIcon.src} 
      alt="close icon" 
        onClick={()=>{setMenuState(HandleClick);}} />
      <a>Home</a>
      <a>UX/UI & Development</a>
      <a>Graphic Design</a>
      <a>About</a>
    </MenuPanel>

  </MenuPanelCont>
    <nav>
      <a className='logo'>Irene Wu</a>
      {/* desktop menu bar */}
      <div className='desktop-menu'>
        <a>Home</a>
        <a>UX/UI & Development</a>
        <a>Graphic Design</a>
        <a>About</a>
      </div>
      {/* mobile menu hamburger */}
      <img className='menu-icon'
        src={menuIcon.src} 
        alt="menu icon" 
        onClick={()=>{setMenuState(HandleClick);}} />

    </nav>
  </div>
}
