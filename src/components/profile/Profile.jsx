import React from 'react';
import Cards from "./cards/Cards";

function Profile(props) {

    const userData = props.userData;

    const userCardData=[
        {
        "_id": {"$oid": "62505300f9ca5f35f3e877ae"},
          "description": "ポイ捨て禁止\nここにゴミを捨てないで\n下さい。\n●マナーを守り、美しい環境\nをつくりましょう。\n",
          "imageURL": "https://cdn-japantimes.com/wp-content/uploads/2017/11/p7-backhaus-bilingualmain-a-20171107.jpg",
          "translatedText": "No littering\nDo not throw garbage here.\nPlease do not use the following\nPlease be mindful of your manners and\nLet's make the world a better place to live.\n",
          "date": "2022-04-08T15:21:30.611Z",
          "id": "624f86c59a3b9b8ce8169e35",
          "username": "Adrian"
        }
        ,
        {
        "_id": {"$oid": "62505317f9ca5f35f3e877af"},
        "description": "危 険■熱湯に注意\n柵の中に入らないで下さい。\nDANGER IIf you fall in the pond.\nyou will be boiled\n",
        "imageURL": "http://localhost:3000/getuploadedpicture?imageLocation=/public/uploads/myImage-1649431316363.jpg",
        "translatedText": "DANGER ■Caution against boiling water\nDo not enter the fence.\nDANGER IIf you fall in the pond.\nyou will be boiled\n",
        "date": "2022-04-08T15:21:56.358Z",
        "id": "624f86c59a3b9b8ce8169e35",
        "username": "Adrian"
        },
        
        {
        "_id": {"$oid": "62505300f9ca5f35f3e877ae"},
        "description": "ポイ捨て禁止\nここにゴミを捨てないで\n下さい。\n●マナーを守り、美しい環境\nをつくりましょう。\n",
        "imageURL": "https://cdn-japantimes.com/wp-content/uploads/2017/11/p7-backhaus-bilingualmain-a-20171107.jpg",
        "translatedText": "No littering\nDo not throw garbage here.\nPlease do not use the following\nPlease be mindful of your manners and\nLet's make the world a better place to live.\n",
        "date": "2022-04-08T15:21:30.611Z",
        "id": "624f86c59a3b9b8ce8169e35",
        "username": "Adrian"
        },
        {
        "_id": {"$oid": "62505300f9ca5f35f3e877ae"},
          "description": "ポイ捨て禁止\nここにゴミを捨てないで\n下さい。\n●マナーを守り、美しい環境\nをつくりましょう。\n",
          "imageURL": "https://cdn-japantimes.com/wp-content/uploads/2017/11/p7-backhaus-bilingualmain-a-20171107.jpg",
          "translatedText": "No littering\nDo not throw garbage here.\nPlease do not use the following\nPlease be mindful of your manners and\nLet's make the world a better place to live.\n",
          "date": "2022-04-08T15:21:30.611Z",
          "id": "624f86c59a3b9b8ce8169e35",
          "username": "Adrian"
        }
        ,
        {
        "_id": {"$oid": "62505317f9ca5f35f3e877af"},
        "description": "危 険■熱湯に注意\n柵の中に入らないで下さい。\nDANGER IIf you fall in the pond.\nyou will be boiled\n",
        "imageURL": "http://localhost:3000/getuploadedpicture?imageLocation=/public/uploads/myImage-1649431316363.jpg",
        "translatedText": "DANGER ■Caution against boiling water\nDo not enter the fence.\nDANGER IIf you fall in the pond.\nyou will be boiled\n",
        "date": "2022-04-08T15:21:56.358Z",
        "id": "624f86c59a3b9b8ce8169e35",
        "username": "Adrian"
        },
        
        {
        "_id": {"$oid": "62505300f9ca5f35f3e877ae"},
        "description": "ポイ捨て禁止\nここにゴミを捨てないで\n下さい。\n●マナーを守り、美しい環境\nをつくりましょう。\n",
        "imageURL": "https://cdn-japantimes.com/wp-content/uploads/2017/11/p7-backhaus-bilingualmain-a-20171107.jpg",
        "translatedText": "No littering\nDo not throw garbage here.\nPlease do not use the following\nPlease be mindful of your manners and\nLet's make the world a better place to live.\n",
        "date": "2022-04-08T15:21:30.611Z",
        "id": "624f86c59a3b9b8ce8169e35",
        "username": "Adrian"
        }
    ]

  return (
    <div>
        <Cards
            userData={userData}
        />
    </div>
  )
}

export default Profile