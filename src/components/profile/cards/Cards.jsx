import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


function Cards(props) {

    const userCardData = props.userCardData;

    const testData=[
        {
        "_id": {"$oid": "62505300f9ca5f35f3e877ae"},
        "imageLinkPath": true,
        "uploadImagePath": false,
        "originalImageSize": {
            "height": 1500,
            "width": 2000
          },
          "description": "ポイ捨て禁止\nここにゴミを捨てないで\n下さい。\n●マナーを守り、美しい環境\nをつくりましょう。\n",
          "imageURL": "https://cdn-japantimes.com/wp-content/uploads/2017/11/p7-backhaus-bilingualmain-a-20171107.jpg",
          "rawImageBox": {
            "top": 328,
            "right": 1675,
            "left": 340,
            "bottom": 413
          },
          "translatedText": "No littering\nDo not throw garbage here.\nPlease do not use the following\nPlease be mindful of your manners and\nLet's make the world a better place to live.\n",
          "date": "2022-04-08T15:21:30.611Z",
          "id": "624f86c59a3b9b8ce8169e35",
          "username": "Adrian"
        }
        ,
        {
        "_id": {"$oid": "62505317f9ca5f35f3e877af"},
        "imageLinkPath": false,
        "uploadImagePath": true,
        "originalImageSize": null,
        "description": "危 険■熱湯に注意\n柵の中に入らないで下さい。\nDANGER IIf you fall in the pond.\nyou will be boiled\n",
        "imageURL": "http://localhost:3000/getuploadedpicture?imageLocation=/public/uploads/myImage-1649431316363.jpg",
        "rawImageBox": {
            "top": 106,
            "right": 416,
            "left": 69,
            "bottom": 132
          },
        "translatedText": "DANGER ■Caution against boiling water\nDo not enter the fence.\nDANGER IIf you fall in the pond.\nyou will be boiled\n",
        "date": "2022-04-08T15:21:56.358Z",
        "id": "624f86c59a3b9b8ce8169e35",
        "username": "Adrian"
        },
        
        {
        "_id": {"$oid": "62505300f9ca5f35f3e877ae"},
        "imageLinkPath": true,
        "uploadImagePath": false,
        "originalImageSize": {
            "height": 1500,
            "width": 2000
        },
        "description": "ポイ捨て禁止\nここにゴミを捨てないで\n下さい。\n●マナーを守り、美しい環境\nをつくりましょう。\n",
        "imageURL": "https://cdn-japantimes.com/wp-content/uploads/2017/11/p7-backhaus-bilingualmain-a-20171107.jpg",
        "rawImageBox": {
            "top": 328,
            "right": 1675,
            "left": 340,
            "bottom": 413
        },
        "translatedText": "No littering\nDo not throw garbage here.\nPlease do not use the following\nPlease be mindful of your manners and\nLet's make the world a better place to live.\n",
        "date": "2022-04-08T15:21:30.611Z",
        "id": "624f86c59a3b9b8ce8169e35",
        "username": "Adrian"
        }
    ]
    
    function onButtonClick (){
        console.log("Working");
    }

    const cardComponent = userCardData.map((submission, i) => {
        return(
            <Col>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={userCardData[i].imageURL} />
                    <Card.Body>
                        <Card.Subtitle>{userCardData[i].date}</Card.Subtitle>
                        <Card.Text>
                        {userCardData[i].description}
                        </Card.Text>
                        <Card.Text>
                        {userCardData[i].translatedText}
                        </Card.Text>
                        <Button 
                            variant="primary"
                            onClick={onButtonClick}>
                                Go somewhere
                            </Button>
                    </Card.Body>
                </Card>
            </Col>
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

/*
 <Container fluid="lg">
    <Row>
            <Col>
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={testData[0].imageURL} />
                <Card.Body>
                    <Card.Subtitle>{testData[0].date}</Card.Subtitle>
                    <Card.Text>
                    {testData[0].description}
                    </Card.Text>
                    <Card.Text>
                    {testData[0].translatedText}
                    </Card.Text>
                    <Button 
                        variant="primary"
                        onClick={onButtonClick}>
                            Go somewhere
                        </Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={testData[1].imageURL} />
                <Card.Body>
                    <Card.Subtitle>{testData[1].date}</Card.Subtitle>
                    <Card.Text>
                    {testData[1].description}
                    </Card.Text>
                    <Card.Text>
                    {testData[1].translatedText}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={testData[2].imageURL} />
                <Card.Body>
                    <Card.Subtitle>{testData[2].date}</Card.Subtitle>
                    <Card.Text>
                    {testData[2].description}
                    </Card.Text>
                    <Card.Text>
                    {testData[2].translatedText}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row >
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
</Container>
        */
