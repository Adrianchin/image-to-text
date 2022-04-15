import styled from 'styled-components';

export const GeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    height:100%;
    min-height:100vh;
    width:100%;
    align-items: center;
    background: #010606;
    background-size: cover;
`;

export const GeneralColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #ffffff;
    padding: 0 50px;
    width:85%;
    height:100%;
    min-height:100vh;
`;

export const PictureColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #ffffff;
`;

export const UpdateButton = styled.button`
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
export const InputContainer = styled.div`
    background: #ffffff;
    height: auto;
    width: 100%;
    grid-template-columns: 1fr 8fr;
    z-index: 1;
    margin-top:10px;
`

