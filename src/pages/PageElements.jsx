import styled from 'styled-components';

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    height:100%;
    width:100%;
    align-items: center;
    background: #010606;
    background-size: cover;

`;
export const UploadColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #ffffff;
    padding: 0 50px;
    width:85%;
`;

export const CardWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    grid-gap: 10px;
    padding: 0 0px;

    //Becomes 1 columns on small screens
    @media screen and (max-width: 1400px){
        grid-template-columns: 1fr;
    }
`;

export const PictureColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #ffffff;
`;