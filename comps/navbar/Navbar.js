import React, {useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import menuIcon from '../../assets/menu-icon.svg';
import closeIcon from '../../assets/close-icon.svg';
import Logo from '../../assets/icon-logo.svg';


const MenuPanelCont = styled.div`
  display: block;
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%;
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
  const router = useRouter();

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
        <a onClick={()=> router.push("/")}>Home</a>
        <a onClick={()=> router.push("/works")} >UX/UI & Development</a>
        <a onClick={()=> router.push("/otherworks")} >Other Works</a>
        <a onClick={()=> router.push("/about")} >About</a>
        {/* <a href="" download>Resume</a> */}
    </MenuPanel>

  </MenuPanelCont>
    <nav>
      {/* <a onClick={()=> router.push("/")} className='logo'>Irene Wu</a> */}
      <a 
        onClick={()=> router.push("/")} 
        className='logo'
        
      >
        <img src={Logo.src} />
      </a>
      {/* desktop menu bar */}
      <div className='desktop-menu'>
        {/* <a onClick={()=> router.push("/")}>Home</a> */}
        <a onClick={()=> router.push("/works")} >UX/UI & Development</a>
        <a onClick={()=> router.push("/otherworks")} >Other Works</a>
        <a onClick={()=> router.push("/about")} >About</a>
        {/* <a href="" download>Resume</a> */}
      </div>
      {/* mobile menu hamburger */}
      <img className='menu-icon'
        src={menuIcon.src} 
        alt="menu icon" 
        onClick={()=>{setMenuState(HandleClick);}} />

    </nav>
  </div>
}
