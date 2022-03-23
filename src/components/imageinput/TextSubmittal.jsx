import React, {useState} from 'react';

function TextSubmittal (props) {
    const setOriginalImageSize = props.setOriginalImageSize;
    const setBox=props.setBox;
    const setImageText=props.setImageText;
    const setTranslatedText=props.setTranslatedText;
    const setImageURL=props.setImageURL;

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

        const ImageSubmitBoxCalculation = () => {
            //creates variables for function (placeholder) for html
            var img = new Image();
            img.src = imageInput;
            //IMPORTANT: onload is async, so you need to put shit in it and whatever you are doing with it in the onload function!
            img.onload = function(){
                let originalHeight = img.height;
                let originalWidth = img.width;
                //Calculates the image displayed on page, called with global variables imageWidth and imageHeight
                //to remove
                /*
                const image = document.getElementById("inputimage");
                let imageWidth = image.width;
                let imageHeight = image.height;
                */
                //creats variables for function (placeholder) Image Ratio=1 because if its 0, it will n/0. Might need to fix later
                /*
                let imageRatioWidth=1;
                let imageRatioHeight=1;
                */
                //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left. I have to take away the Original height from the bottom value
                /*
                imageRatioWidth=imageWidth/originalWidth;
                imageRatioHeight=imageHeight/originalHeight;
                */
                //Updates the box for render
                setBox({
                    top: imageInformation[0].boundingPoly.vertices[0].y,
                    right: /*imageWidth-*/imageInformation[0].boundingPoly.vertices[1].x,
                    left: imageInformation[0].boundingPoly.vertices[0].x,
                    bottom: (originalHeight-imageInformation[0].boundingPoly.vertices[2].y)
                });
                setOriginalImageSize({
                    height: originalHeight,
                    width: originalWidth
                });
            }
        }
    
        ImageSubmitBoxCalculation();

        setImageText(imageInformation[0].description);

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

export default TextSubmittal;