import React, { useState } from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './ServiceProviderSidebarData';
import SubMenu from './ServiceProviderSubMenu';





const SidebarNav = styled.nav`
  background: #15171c;
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
 
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 1;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;const Sidebar = () => {
    const [sidebar] = useState(true);
  
   



  return (
    <>
      
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
               {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
    
    </>
  );
};

export default Sidebar;