import React, {useState, useRef, useEffect} from 'react';
import ImageSubmit from './components/imageinput/ImageSubmit';
import LinkSubmittal from './components/imageinput/LinkSubmittal';
import TextToDeepL from './components/imageinput/TextToDeepL';
import ImageDisplay from './components/imageinput/ImageDisplay';
import 'tachyons';
import './App.css';

function App() {
/*Note setstate is async, remember that 
you want to use consol log (or other stuff inside code) 
outside the function, otherwise it will return with async properties*/

  //Displays the image URL of the picture. I think I need so we dont display the image in a moving text 
  const [imageURL, setImageURL] = useState('');

  //Required to move image size from child to parent in upload
  const [uploadOriginalImageSize, setUploadOriginalImageSize] = useState('');
  //Required to move image size from child to parent in link
  const [linkOriginalImageSize, setLinkOriginalImageSize] = useState('');
  //Required to trigger image function from uploaded image
  const [uploadImageTest, setUploadImageTest] = useState(false);
  //Required to trigger image function from link submitted image
  const [linkImageTest, setLinkImageTest] = useState(false);
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [uploadBox, setUploadBox] = useState("");
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [linkBox, setLinkBox] = useState("");

  //Displays translated text from DeepL
  const [translatedText, setTranslatedText] = useState('');
  //Displays to user what is on the image
  const [imageText, setImageText] = useState("");



return (
  <div>
    <div>
    <ImageSubmit 
    setImageText={setImageText} 
    setUploadBox={setUploadBox}
    setImageURL={setImageURL} 
    setUploadOriginalImageSize={setUploadOriginalImageSize}
    setUploadImageTest={setUploadImageTest}
    setTranslatedText={setTranslatedText}/>
    </div>
    <div>
      <TextToDeepL
      setTranslatedText={setTranslatedText}
      translatedText={translatedText}
      imageText={imageText}
        />
    </div>
    <div>
      <LinkSubmittal
      setLinkOriginalImageSize={setLinkOriginalImageSize}
      setLinkBox={setLinkBox}
      setImageText={setImageText}
      setTranslatedText={setTranslatedText}
      setImageURL={setImageURL}
      setLinkImageTest={setLinkImageTest}
      />
      <div>
        <ImageDisplay
        linkImageTest={linkImageTest}
        linkOriginalImageSize={linkOriginalImageSize}
        linkBox={linkBox}
        uploadImageTest={uploadImageTest}
        uploadOriginalImageSize={uploadOriginalImageSize}
        uploadBox={uploadBox}
        imageURL={imageURL}
        />
      </div>
    </div>
  </div>
  );
};

export default App;