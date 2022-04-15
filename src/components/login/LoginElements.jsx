import styled from "styled-components";
import {Link} from "react-router-dom";

export const SignInContainer = styled.div`
    min-height:692px;
    overflow: hidden;
    background-image: url(${require("../../main_page_images/geisha.jpg")});
    background-size: cover;
    opacity: 1;
    justify-content: center;
    background-attachment: fixed;
    background-position:center;
    background-repeat: no-repeat;
    position: fixed;
    z-index: -1;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0%;
`;

export const RegisterContainer = styled.div`
    min-height:692px;
    overflow: hidden;
    background-image: url(${require("../../main_page_images/town.jpg")});
    background-size: cover;
    opacity: 1;
    justify-content: center;
    background-attachment: fixed;
    background-position:center;
    background-repeat: no-repeat;
    position: fixed;
    z-index: -1;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0%;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:400px) {
        height:80%;
    }
`;

export const IconDiv = styled.div`
    margin-left: 32px;
    margin-top: 32px;

    @media screen and (max-width:480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const Icon = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: 450;
    font-size: 32px;

    &:hover {
    color: #16B8BB;
    transition: 0.2s ease-in-out;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){ 
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){ 
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #16B8BB;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in;
        background: #fff;
        color: #010606;
    }
`;

export const TextDiv = styled.div`
    text-align: center;
    padding: 16px 16px;
`

export const Text = styled.span`
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
`;