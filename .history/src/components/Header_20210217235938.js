import React from 'react';
import { NavLink } from 'react-router-dom';
import {HeaderTitle, Navigation, Ul, Li } from './styled/styled';


const navTab = [
  {id: 1, title: "Home", path: "/", color: "#1976d2", exact: true},
  {id: 2, title: "Users", path: "/users", color: "#e6b500"},
  {id: 3, title: "Contact", path: "/contacts", color: "#10bc22"},
  {id: 4, title: "Projects", path: "/projects", color: "#d60102"},
];

const navItem = navTab.map(item =>
<Li key={item.id} color={item.color}>
  <NavLink to={item.path} exact={item.exact ? item.exact : false} style={{textDecoration: 'none', color: `${item.color}`}}>{item.title}</NavLink>
</Li>)
const Header = () => {
  return (
    <>
    <HeaderTitle>
        AppUser with React & Redux & Axios
    </HeaderTitle>
    <Navigation>
      <Ul>{navItem}</Ul>
    </Navigation>
    </>
  )
}

export default Header