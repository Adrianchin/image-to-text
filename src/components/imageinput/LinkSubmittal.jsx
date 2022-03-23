import React, {useState} from 'react';

function LinkSubmittal (props) {
    const setLinkOriginalImageSize = props.setLinkOriginalImageSize;
    const setLinkBox=props.setLinkBox;
    const setImageText=props.setImageText;
    const setTranslatedText=props.setTranslatedText;
    const setImageURL=props.setImageURL;
    const setLinkImageTest= props.setLinkImageTest;

    //Live update of input for image url. May be dubplicated, see imageURL. May be changed to global var?
    const [imageInput, setImageInput] = useState('');

    function onImageSubmit () {
        let imageData = JSON.stringify({
        link: imageInput
        });
        
        //Async fetch for google image to text
    async function fetchImageInfo() {
        try{
        const response = await fetch('http://localhost:3000/imagelinkphoto', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: imageData
        })
        const imageInformation = await response.json();
        console.log("This is the return from API:", imageInformation)
        //creates variables for function (placeholder) for html

        let originalHeight;
        let originalWidth;
        
        //IMPORTANT: onload is async, so you need to put shit in it and whatever you are 
        //doing with it in the onload function!
        //Note. I made a promise beause otherwise, onload will be async and we need the outputs
        //for the box calculations. This is a general onload promise, which we then use for the image
        function onLoadPromiseImageFunction(image){
            return new Promise((resolve, reject) => {
                image.onload=()=>resolve(image);
                image.onerror=reject;
            });
        }
        let img = new Image();
        let imgpromise = onLoadPromiseImageFunction(img);
        img.src = imageInput;
        await imgpromise;

        originalHeight = img.height;
        originalWidth = img.width;

        console.log("returned originalHeight:",originalHeight)
        console.log("returned originalWidth:",originalWidth)

        setLinkOriginalImageSize({
            height: originalHeight,
            width: originalWidth
        });
        setImageText(imageInformation[0].description);
        //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left. I have to take away the Original height from the bottom value
        //Updates the box for render
        setLinkBox({
        top: imageInformation[0].boundingPoly.vertices[0].y,
        right: imageInformation[0].boundingPoly.vertices[1].x,
        left: imageInformation[0].boundingPoly.vertices[0].x,
        bottom: (originalHeight-imageInformation[0].boundingPoly.vertices[2].y)
        });

        //Send to API for translation
        const linkTextSubmit = () => {
            let textData = JSON.stringify({
                textFromImage: imageInformation[0].description
            });
            
            async function fetchTextTranslation() {
                try{
                const response = await fetch(`http://localhost:3000/textfortranslation`, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: textData
                })

                const translatedTextInfo = await response.json();

                setTranslatedText(translatedTextInfo.translations[0].text);

                setLinkImageTest(true);

                }catch(error){
                console.log("Error fetching API response for text, try again")
                };
            };
            fetchTextTranslation();
        };
        linkTextSubmit();
    } catch(error) {
        console.log("Error fetching API response for image, try again")
    };
    }
    fetchImageInfo();
    };

    const onImageButtonSubmit = () => {
        //Note: I think this is async, so I cannot use imageInput as it is in que, and onImageSubmit runs and imageInput is old!
        //This is reset to setState because we need to render the image!! Otherwise dont need this.
        setImageURL(imageInput);
        //calls onImageSubmit for API send
        onImageSubmit();
      };
      // console.log("imageURL is", imageURL);
    const onImageInput = (event) => {
        setImageInput(event.target.value);
    };
    //  console.log("Image Input is", imageInput);
      

    return(
        <div>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input 
            className='f4 pa2 w-70 center' 
            type='text' 
            onChange={onImageInput}/>
            <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onImageButtonSubmit}
            >
                Img URL Please
            </button>
            </div>
        </div>
    </div>
    )
};

export default LinkSubmittal;