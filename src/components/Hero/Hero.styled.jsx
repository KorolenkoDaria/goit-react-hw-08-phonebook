import styled from "styled-components";

import myImage from 'img/pexels-hassan-ouajbir-804065.jpg';
import { NavLink } from "react-router-dom";


export const HeroWrapper = styled.div`
    margin-top: 75px;
    min-height: calc(100vh - 75px);
    background-image: linear-gradient(to bottom, rgba(36, 37, 52, 0.7), rgba(46, 47, 66, 0.7)),url(${myImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 160px 30px 60px 60px;
`
export const Title = styled.h1`
    color: #fff;
    font-size: 68px;
    line-height: 1;
    margin-bottom: 20px;
`
export const Span = styled.span`
    color: #1abc9c;
`
export const SubTitle = styled.h2`
    color: #fff;
    font-weight:400;
    font-size: 18px; 
    margin-bottom: 50px;  
`
export const StyledNavLink = styled(NavLink)`
    width: 160px ;
    padding: 8px 24px;
    background-color:#fff;
    border-radius: 4px;
    border:none;
    font-weight: 600;
    color: #2c3d50c7;
    transition: all 0.3s ease;
    &:hover{    
        color:#fff;
        background-color: #1abc9c;
    }
`