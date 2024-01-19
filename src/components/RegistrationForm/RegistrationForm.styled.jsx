import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    width: 350px;
    border: 1px solid #2c3d50;
    margin: 120px auto  0;
    border-radius: 6px;
    padding: 40px 60px;
`

export const Title = styled.p`
    text-align: center;
    color: #1abc9c;
    font-size: 26px;
    font-weight: 700;
    margin-bottom:  30px;

`
export const FormElement = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const LabelElement = styled.label`
    color: #2c3d50;
    opacity: 0.7;   
    font-size: 14px;
    font-weight: 500;
`
export const InputElement = styled.input`
border: none;
    border-bottom: 1px solid #2c3d50;
    height: 35px;
    padding-left: 18px;
    outline: none; 
    ::placeholder {
        color: #8795a1;  
        opacity: 0.7;   
        font-size: 12px;
    }
    &:focus {
        border-color:#18a287; 
    }
`
export const ButtonElement = styled.button`
    padding: 12px 0;
    border: none;
    background-color: #1abc9c;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    transition: all 0.3s ease;
    &:hover{    
        color: #fff;
        background-color: #18a287;
    }
`
export const DivElement = styled.div`
    display: flex;
    justify-content: center;
    gap: 4px;
`
export const PElement = styled.p`
    font-size: 16px;
    color: #2c3d50;
`
export const StyledNavLink = styled(NavLink)`
    color: #1abc9c;
    font-weight: 500;
    transition: all 0.3s ease;
    &:hover{    
        color: #18a287;
    }
`
