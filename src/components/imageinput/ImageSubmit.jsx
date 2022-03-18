import React, {useState} from 'react';

function ImageSubmit() {

    const [file, setFile] = useState(null);
    //const [fileName, setFileName] = useState(null);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        console.log(file);
        const formData = new FormData();
        formData.append('myImage', file);
        //formData.append('fileName', filename);
        console.log(formData);
        // const config = {
        //     headers: {'content-type': 'multipart/form-data'}
        // };
        try{
            const response = await fetch("http://localhost:3000/upload", {
            method: 'POST',
            body:formData 
        })
        const uploadresponse = await response.json();
        console.log("Response for upload:", uploadresponse)
            //alert("The file is successfully uploaded!");
        } catch(error) {
            console.log("Error submitting photo", error)
        }
    };

    const onChange = (event) => {
        setFile(event.target.files[0]);
        //setFileName(event.target.files[0].name);
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