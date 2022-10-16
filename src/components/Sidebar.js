import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input{
    margin: auto auto auto 2rem;
    height: 2rem;
    border-radius: 10px;
  }
  p{
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: white;
    margin: auto auto auto 0%;
  }
  h3{
    font-size: 20px;
    color: white;
    margin-right: 1rem;
    padding: auto;
    cursor: pointer;
  }
  h4{
    font-size: 20px;
    color: white;
    margin-right: 1rem;
    padding: auto;
    cursor: pointer;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;


const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
        
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <input width= "30%" placeholder="Team..."/>
          <p>IPL Chart</p>
          <h3>Log In </h3>
          <h4>Sign Up</h4>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;