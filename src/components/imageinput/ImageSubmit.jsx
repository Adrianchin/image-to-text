import React, {useState} from 'react';

function ImageSubmit() {

    const [file, setFile] = useState(null);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('myImage', file);
        console.log(formData);
        try{
            const response = await fetch("http://localhost:3000/upload", {
            method: 'POST',
            body:formData 
        })
        const imageInformation = await response.json();
        const imageLocation=imageInformation[imageInformation.length-2];
        const imageSize=imageInformation[imageInformation.length-1];

        console.log("Response for upload:", imageInformation)
            //alert("The file is successfully uploaded!");
        
        //const GoogleDataSubmitted=uploadresponse;
        const ImageTextSubmitted=imageInformation[0].description;
        
        const rawImageBox={
            top: imageInformation[0].boundingPoly.vertices[3].y,
            right: imageInformation[0].boundingPoly.vertices[1].x,
            left: imageInformation[0].boundingPoly.vertices[0].x,
            bottom: imageInformation[0].boundingPoly.vertices[0].y
            };
        
        console.log("This is the image text:", ImageTextSubmitted)
        console.log("This is the image box:", rawImageBox)
        console.log("This is the image location:", imageLocation)
        console.log("This is the image size", imageSize)

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