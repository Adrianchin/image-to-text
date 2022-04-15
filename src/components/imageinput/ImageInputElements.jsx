import styled from "styled-components";

export const ImageUploadForm = styled.form`
background: #ffffff;
max-width: 500px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
grid-template-rows: 2fr 1fr;
margin: 0 auto;
padding: 30px 30px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px){ 
    padding: 30px 0px;
    max-width: 250px;
    grid-template-rows: 1fr 1fr;
}
`;

export const UploadFileButton = styled.div`
    border-radius: 5px;
    background: #000000;
    white-space: nowrap;
    padding: 10px 40px;
    color: #ffffff;
    font-size: 14px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        background: #13dbdf;
    }
`
export const UploadButton = styled.button`
    border-radius: 5px;
    background: #000000;
    white-space: nowrap;
    padding: 10px 10px;
    color: #ffffff;
    font-size: 14px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        background: #13dbdf;
    }
`
export const InputURL = styled.input`
    padding: 10px 10px;
    border: solid;
    border-radius: 5px;
    font-size: 14px;
`
export const SubmitContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 20px;
    @media screen and (max-width: 500px){ 
    grid-template-columns: 1fr;
    }
`

export const InputContainer = styled.div`
    background: #ffffff;
    max-width: 400px;
    height: auto;
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    z-index: 1;
    margin: 0 auto;
    padding: 30px 30px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 500px){ 
    padding: 30px 0px;
    max-width: 250px;
    grid-template-rows: 1fr 1fr;
    }
`