// is a general button because it is a react scroll button. Usually if you want to have a button with differnt links, you need seperate components

import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 50px;
    //background of button, primary color.
    background: ${({primary})=>(primary ? '#16B8BB' : '#000000')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    //alternative color, if we put dark=true in inline element, it will change to this.
    color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    //changes button to green on hover
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? '#ffffff' : '#16B8BB')};
    }
`; 