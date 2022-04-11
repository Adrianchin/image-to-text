import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Cards(props) {
  const userData = props.userData;
  const setUserDisplayData = props.setUserDisplayData;
  const setRoute = props.setRoute;
  const setUserData=props.setUserData


  const styles = {
    card: {
      backgroundColor: "#b7e9f2",
      borderRadius: 0,
      padding: "1.5rem",
      width: "20rem",
    },
    cardImage: {
      objectFit: "cover",
      borderRadius: 5,
      height: 200,
    },
  };

  function onGoButtonClick(event) {
    const id = event.target.id;
    console.log(id);
    setUserDisplayData(userData.profile[id]);
    setRoute("displaydata");
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
        const placeholderDataObject = Object.create(userData);
        const getUserDataURL = `http://localhost:3000/getProfileData?id=${userData._id}`;
        const response = await fetch(getUserDataURL,{
          method: "GET"
        })
        const userDataReturn = await response.json();
        placeholderDataObject.profile =userDataReturn;
        console.log("This is the placeholderDataObject in Cards:", placeholderDataObject)
        setUserData(placeholderDataObject)
      }catch(error) {
        console.log(
          "Error getting profile data: ", error
          );
        }
      }

    await deleteDocument();
    await getUserData();
    console.log("This is userData after getUserData: ", userData)
  }

  const cardComponent = userData.profile.map((empty, i) => {
    //console.log(`This is userData${i} from Cards run: `, userData)
    return (
      <Card style={styles.card}>
        <Card.Img
          style={styles.cardImage}
          variant="top"
          src={userData.profile[i].imageURL}
        />
        <Card.Body>
          <Card.Subtitle>{userData.profile[i].date}</Card.Subtitle>
          <Card.Text>
            {userData.profile[i].imageInformation[0].description}
          </Card.Text>
          <Card.Text>{userData.profile[i].translatedText}</Card.Text>
        </Card.Body>
        <Button id={i} variant="primary" onClick={onGoButtonClick}>
            Go somewhere
          </Button>
        <Button id={i} variant="primary" onClick={onDeleteButtonClick}>
            Delete
          </Button>
      </Card>
    );
  });

  console.log("This is cardComponent: ", cardComponent)

  return (
    <Container>
      <Row>{cardComponent}</Row>
    </Container>
  );
}

export default Cards;
