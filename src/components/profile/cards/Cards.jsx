import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  CardContainer,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardButton,
  CardImage,
  ButtonContainer,
  CardBackground,
} from "./CardElements";


function Cards(props) {
  let navigate = useNavigate();
  const userData = props.userData;
  const setUserDisplayData = props.setUserDisplayData;
  const setUserData = props.setUserData;
  

  function onGoButtonClick(event) {
    const id = event.target.id;
    console.log(id);
    setUserDisplayData(userData.profile[id]);  
    navigate("/displaycard")
  }

  async function onDeleteButtonClick(event) {
    const id = event.target.id;

    async function deleteDocument() {
      try {
        let data = JSON.stringify({
          data: userData.profile[id],
        });
        console.log(data);
        const response = await fetch("http://localhost:3000/uploads/deletedocument", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data,
          credentials: 'include',
        });
        const deleteDocumentReturn = await response.json();
        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate("/signin");
        }
        console.log(deleteDocumentReturn);
      } catch (error) {
        console.log("Error deleting document");
      }
    }

    async function getUserData() {
      try {
        const placeholderDataObject = { ...userData };
        const getUserDataURL = `http://localhost:3000/users/getProfileData`;
        const response = await fetch(getUserDataURL, {
          method: "GET",
          credentials: 'include',
        });
        const userDataReturn = await response.json();
        placeholderDataObject.profile = userDataReturn;
        setUserData(placeholderDataObject);
      } catch (error) {
        console.log("Error getting profile data: ", error);
      }
    }

    await deleteDocument();
    await getUserData();
  }

  const cardComponent = userData.profile.map((empty, i) => {
    //console.log(`This is userData${i} from Cards run: `, userData)
    return (
      <Card key={i}>
        <CardBackground />
        <CardImage id={i} variant="top" src={userData.profile[i].imageURL} onClick={onGoButtonClick}/>
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
      </Card>
    );
  });

  return (
    <CardContainer>
      <CardWrapper>{cardComponent}</CardWrapper>
    </CardContainer>
  );
}

export default Cards;
