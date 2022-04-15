import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    grid-gap: 10px;
    padding: 0 0px;

    //Becomes 2 columns on small screens
    @media screen and (max-width: 1500px){
        grid-template-columns: 1fr 1fr;
    }

    //Becomes 1 column in small phones
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    border-radius: 20px;
    max-width: 500px;
    max-height: auto;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    position: relative;
    transition: all 0.2s ease-in-out;
`;

export const CardBackground = styled.div`
    background: #fff;
    position:absolute;
    border-radius: 20px;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .8;
    z-index:-1;
`


export const CardImage = styled.img`
    object-fit: cover;
    border-radius: 10px;
    height: 300px;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: auto;
    width: auto;
    transition: all 0.2s ease-in-out;
`;

export const CardTitle = styled.h1`
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const CardText = styled.h2`
        font-size: 1rem;
        margin-bottom: 10px;
`;

export const CardButton = styled.button`
    border-radius: 5px;
    //background of button, primary color.
    background: ${({primary})=>(primary ? '#16B8BB' : '#C3272B')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '18px 48px' : '12px 48px')};
    //alternative color, if we put dark=true in inline element, it will change to this.
    color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
    font-size: ${({fontBig})=> (fontBig ? '18px' : '16px')};
    outline: none;
    border: none;
    margin-top: 10px;
    cursor: pointer;
    width: 100%;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    //changes button to green on hover
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? '#13dbdf' : '#ec131b')};
    }
`;

export const ButtonContainer = styled.div`
   margin-top: auto;
`
