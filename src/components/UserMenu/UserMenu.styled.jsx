import { styled } from "styled-components";

export const Wrapper = styled.div`
     margin-left: auto;
     display: flex;
     gap: 30px;
     align-items: center;
`
export const ButtonElement = styled.button`
     color:#121826;
    font-weight: 600;
    padding: 8px 12px;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    transition: all 0.3s ease;
    &:hover{
        background-color: #1abc9c;
        color:#fff;     
    }
`
export const PElement = styled.p`
   color:#1abc9c;
`

