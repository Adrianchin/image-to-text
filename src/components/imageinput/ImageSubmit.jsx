import React, {useState} from 'react';

function ImageSubmit(props) {
    const setImageText=props.setImageText;
    const setUploadBox=props.setUploadBox;
    const setImageURL=props.setImageURL;
    const setImageSize=props.setImageSize;
    const setUploadImageTest=props.setUploadImageTest;
    const setTranslatedText=props.setTranslatedText;

    const [file, setFile] = useState(null);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('myImage', file);
        //console.log(formData);
        try{
            const response = await fetch("http://localhost:3000/upload", {
            method: 'POST',
            body:formData 
        })
        const imageInformation = await response.json();
        const imageLocation=imageInformation[imageInformation.length-2];
        const imageSize=imageInformation[imageInformation.length-1];

        const uploadedURL = `http://localhost:3000/getuploadedpicture?imageLocation=${imageLocation}`
        console.log("Uploaded Image URL :",uploadedURL);

        async function imageFetch() {
            console.log("Test")
            try{
            const response = await fetch(uploadedURL, {
                method: 'GET'
            })
                const imageFetchResponse = await response.json();
                console.log("This is the image fetchresponse", imageFetchResponse);

            }catch(error){
                console.log("Error fetching picture from server", error)
            }};
            imageFetch();

        console.log("Response for upload:", imageInformation)
            //alert("The file is successfully uploaded!");
        
        //const GoogleDataSubmitted=uploadresponse;
        const ImageTextSubmitted=imageInformation[0].description;
        
        //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left.
        const rawImageBox={
            top: imageInformation[0].boundingPoly.vertices[0].y,
            right: imageInformation[0].boundingPoly.vertices[1].x,
            left: imageInformation[0].boundingPoly.vertices[0].x,
            bottom: imageSize.height-imageInformation[0].boundingPoly.vertices[2].y
            };
        
        //Send to API for translation
        const uploadTextSubmit = () => {
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

                    console.log("This is the translated text uploaded", translatedTextInfo);
                
                }catch(error){
                    console.log("Error fetching API response for text, try again", error)
                };
            };
            fetchTextTranslation();
        };
        uploadTextSubmit();

        console.log("This is the image text:", ImageTextSubmitted);
        console.log("This is the image box:", rawImageBox);
        console.log("This is the image local location:", imageLocation);
        console.log("This is the image size", imageSize);

        setImageText(ImageTextSubmitted);
        setUploadBox(rawImageBox);
        setImageURL(uploadedURL);
        setImageSize(imageSize);
        setUploadImageTest(true);

        } catch(error) {
            console.log("Error submitting photo", error)
        }
    };

    const onChange = (event) => {
        setFile(event.target.files[0]);
    }

    return (
        <form onSubmit={onFormSubmit}>
        <h1> File Upload </h1>
        <input 
        type="file" 
        name="myImage" 
        onChange={onChange}/>
        <button 
        type="submit">
            Upload
        </button>
        </form>
    )
};

export default ImageSubmit;