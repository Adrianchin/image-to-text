import styled from "styled-components";

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
export const InputText = styled.input`
    padding: 10px 10px;
    border: solid;
    border-radius: 5px;
    font-size: 14px;
`
export const SubmitContainer = styled.div`
    display: grid;
    grid-template-columns: 6fr 1fr;
    height: 20px;
    @media screen and (max-width: 500px){ 
    grid-template-columns: 1fr;
    }
`

export const InputContainer = styled.div`
    background: #ffffff;
    height: auto;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    z-index: 1;
    margin: 0 auto;
    padding: 10px 10px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    margin-top:10px;

    @media screen and (max-width: 500px){ 
    padding: 30px 0px;
    max-width: 250px;
    grid-template-rows: 1fr 1fr;
    }
`

//For Token Table

export const TokenizedTableContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    border-radius: 5px;
    max-width: auto;
    max-height: auto;
    padding: 25px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    position: relative;
    transition: all 0.2s ease-in-out;
    margin-top:10px;
`;