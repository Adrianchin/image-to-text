import React, {useEffect} from "react";
import {Button, Card, Row, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  CardContainer,
  CardN,
  CardBody,
  CardTitle,
  CardText,
  CardButton,
  CardImage,
  ButtonContainer,
} from './CardElements';

function Cards(props) {
  let navigate = useNavigate();
  const userData = props.userData;
  const setUserDisplayData = props.setUserDisplayData;
  const setRoute = props.setRoute;
  const setUserData=props.setUserData


  const styles = {
    card: {
      backgroundColor: "#ffffff",
      borderRadius: 0,
      padding: "1rem",
      width: "23rem",
    },
    cardImage: {
      objectFit: "cover",
      borderRadius: 5,
      height: 300,
    },
    cardButtonDetails:{
      backgroundColor: "#16B8BB",
    },
    deleteButtonDetails:{
      backgroundColor: "#16B8BB",
    }
  };

  function onGoButtonClick(event) {
    const id = event.target.id;
    console.log(id);
    setUserDisplayData(userData.profile[id]);
    navigate("/displaydata");
  }

  async function onDeleteButtonClick(event) {
    const id = event.target.id;

    async function deleteDocument(){
      try{
        let data = JSON.stringify({
          _id: userData.profile[id]._id
        });
        console.log(data)
        const response = await fetch("http://localhost:3000/deletedocument",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data
        })
        const deleteDocumentReturn = await response.json();
        console.log(deleteDocumentReturn)
      }catch(error) {
        console.log(
          "Error deleting document"
        );
      }
    }

    async function getUserData(){
      try{
        const placeholderDataObject = {...userData};
        const getUserDataURL = `http://localhost:3000/getProfileData?id=${userData._id}`;
        const response = await fetch(getUserDataURL,{
          method: "GET"
        })
        const userDataReturn = await response.json();
        placeholderDataObject.profile =userDataReturn;
        setUserData(placeholderDataObject)
      }catch(error) {
        console.log(
          "Error getting profile data: ", error
          );
        }
      }

    await deleteDocument();
    await getUserData();
  }

  const cardComponent = userData.profile.map((empty, i) => {
    //console.log(`This is userData${i} from Cards run: `, userData)
    return (
      <CardN key={i}>
        <CardImage
          key={i}
          style={styles.cardImage}
          variant="top"
          src={userData.profile[i].imageURL}
        />
        <CardBody>
          <CardTitle>{userData.profile[i].date}</CardTitle>
          <CardText>
            {userData.profile[i].imageInformation[0].description}
          </CardText>
          <CardText>{userData.profile[i].translatedText}</CardText>
        </CardBody>

<ButtonContainer>
        <CardButton 
        id={i} 
        primary={true}
        big={true}
        fontBig={true}
        onClick={onGoButtonClick} 
        >
            View Image and Information
          </CardButton>
        <CardButton 
        id={i} 
        primary={false}
        big={false}
        fontBig={false}
        onClick={onDeleteButtonClick} 
        >
            Delete
          </CardButton>
          </ButtonContainer>

      </CardN>
    );
  });

  return (
    <CardContainer>
      <CardWrapper>
        {cardComponent}
      </CardWrapper>
    </CardContainer>
  );
}

export default Cards;
