import { styled } from "styled-components";


import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
    display:flex;
    gap: 30px;
    align-items: center;
    height: 75px;
`
export const StyledUl = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    height: 75px;
    margin-left: auto;
`
export const StyledLi = styled.li`

`
export const StyledNavLink = styled(NavLink)`
    color:#fff;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    &:hover{    
        
        background-color: #1abc9c;
    }
    &.active{
    
      background-color: #1abc9c;
    }
`

export const StyledNavLinkLogo = styled(NavLink)`
width: 150px;

`
export const Logo = styled.img`
width: 100%;
`

