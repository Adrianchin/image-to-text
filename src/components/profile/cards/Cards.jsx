import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Cards(props) {

const userData = props.userData;

const styles = {
    card: {
        backgroundColor: '#B7E0F2',
        borderRadius: 5,
        padding: '1rem',
        width: "25rem"
    },
    cardImage: {
        objectFit: 'cover',
        borderRadius: 10,
        height: 200
    }
  }

  
    function onButtonClick (){
        console.log("Working");
    }

    const cardComponent = userData.profile.map((submission, i) => {
        return(

                <Card style={styles.card}>
                    <Card.Img style={styles.cardImage} variant="top" src={userData.profile[i].imageURL} />
                    <Card.Body>
                        <Card.Subtitle>{userData.profile[i].date}</Card.Subtitle>
                        <Card.Text>
                        {userData.profile[i].imageInformation[0].description}
                        </Card.Text>
                        <Card.Text>
                        {userData.profile[i].translatedText}
                        </Card.Text>
                        <Button 
                            variant="primary"
                            onClick={onButtonClick}>
                                Go somewhere
                            </Button>
                    </Card.Body>
                </Card>

        )
    })

  return (
      <Container>
          <Row>
            {cardComponent}
          </Row>
      </Container> 
  );
}

export default Cards;