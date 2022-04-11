import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Cards(props) {
  const userData = props.userData;
  const setUserDisplayData = props.setUserDisplayData;
  const setRoute = props.setRoute;

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

  function onDeleteButtonClick(event) {
    const id = event.target.id;
    console.log(id);
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
