import styled from "styled-components";

export const Wrapper = styled.div`
   width: 300px;
    border-radius: 8px;
    background-color: #2c3d50;
    border: 1px solid #2c3d50;
    padding: 30px 25px;
    height: 100%;
`
export const H2 = styled.h2`
      text-align: center;
    color: #1abc9c;
    font-size: 22px;
    font-weight: 700;
    margin-bottom:  20px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;  
    margin-bottom: 15px;
`
export const Label = styled.label`
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #1abc9c;
    padding-left: 18px;
`
export const Input = styled.input`
    border-radius: 35px;
    border: none;
    height: 25px;
    padding-left: 18px;
    outline: transparent;
    font-family: sans-serif;
    font-size: 14px;

    &::placeholder{
        font-size: 12px;
    }
`
export const Button = styled.button`
    padding: 8px 12px;
    background-color: #1abc9c;
    color: #fff;
    border: none;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 700;
    transition: background-color .25s cubic-bezier(.4,0,.2,1), color .25s cubic-bezier(.4,0,.2,1);
    width: 185px;
    margin: 30px auto 0;
    border-radius: 35px;
    cursor: pointer;
        &:hover{
            background-color: #fff;
            color:#1abc9c;
        }
`