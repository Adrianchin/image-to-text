import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
`;

export const CardWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    grid-gap: 20px;
    padding: 0 0px;

    //Becomes 2 columns on small screens
    @media screen and (max-width: 1300px){
        grid-template-columns: 1fr 1fr;
    }

    //Becomes 1 column in small phones
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;