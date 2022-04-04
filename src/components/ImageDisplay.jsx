import React, {useState, useRef, useEffect} from 'react';

function ImageDisplay (props) { 
    const linkImagePath = props.linkImagePath;
    const linkOriginalImageSize = props.linkOriginalImageSize;
    const linkBox = props.linkBox;
    const uploadImagePath = props.uploadImagePath;
    const uploadOriginalImageSize = props.uploadOriginalImageSize;
    const uploadBox = props.uploadBox;
    const imageURL = props.imageURL;

    const [box, setBox] = useState("");
    const [currentWidth, setCurrentWidth] = useState("");
    const [currentHeight, setCurrentHeight] = useState("");

    const imageResize="600px"; //used for image width input on <img/>

    console.log("This is the image URL in component", imageURL)
    const imageRef = useRef(); 
    console.log("This is the linkImageTest", linkImagePath)
    console.log("This is the uploadImageTest", uploadImagePath)
    
      const onImgLoad=({target:img})=>{
      const{offsetHeight,offsetWidth}=img;
      console.log(offsetHeight,offsetWidth);
      setCurrentHeight(offsetHeight);
      setCurrentWidth(offsetWidth); 
    }

      useEffect(() => {
        //I need to triger this if I upload, as the function is slightly different from the other calculation. 
        //Need to structure like this because of update, render, update requirement.
    
          //IMAGE LINK PATH!!!!!
        if (linkImagePath===true){
          //IMAGE LINK PATH!!!!!
          console.log("Test linkImageTest", linkImagePath)
    
          function ImageSubmitBoxCalculationUpload() {
            
            //IMAGE LINK PATH!!!!!
    
            console.log("Image Current Height Dimenstions in linkImagetest", currentHeight);
            console.log("Image Current Width Dimenstions in linkImagetest", currentWidth);
    
            console.log("This is the original height: Link", linkOriginalImageSize.height)
            console.log("This is the original width: Link", linkOriginalImageSize.width)
    
    
            let imageRatioWidth=currentWidth/linkOriginalImageSize.width;
            let imageRatioHeight=currentHeight/linkOriginalImageSize.height;
    
            console.log("Link ImageRatioHeight:",imageRatioHeight)
            console.log("Link ImageRatiowidth:",imageRatioWidth)
            console.log("linkBox:",linkBox)
            
            setBox({
              top: linkBox.top*imageRatioHeight,
              right: currentWidth-linkBox.right*imageRatioWidth,
              left: linkBox.left*imageRatioWidth,
              bottom: linkBox.bottom*imageRatioHeight
              });
            }
          ImageSubmitBoxCalculationUpload();
        };
    
        //I need to triger this if I upload, as the function is slightly different from the other calculation. 
        //Need to structure like this because of update, render, update requirement.
    
          //IMAGE UPLOAD PATH!!!!!
        if (uploadImagePath===true){
          //IMAGE UPLOAD PATH!!!!!
          console.log("Image Current Height Dimenstions in uploadImagetest", currentHeight);
          console.log("Image Current Width Dimenstions in uploadImagetest", currentWidth);
    
          console.log("Test uploadImageTest", uploadImagePath)
    
          function ImageSubmitBoxCalculationUpload () {
    
            //IMAGE UPLOAD PATH!!!!!
    
            let originalHeight=uploadOriginalImageSize.height;
            let originalWidth=uploadOriginalImageSize.width;
    
            console.log("This is the original height: Upload", originalHeight)
            console.log("This is the original width: Upload", originalWidth)
    
            let imageRatioWidth=currentWidth/originalWidth;
            let imageRatioHeight=currentHeight/originalHeight;
    
            console.log("Upload ImageRatioHeight:",imageRatioHeight)
            console.log("Upload ImageRatiowidth:",imageRatioWidth)
            console.log("UploadBox:",uploadBox)
            
            setBox({
              top: uploadBox.top*imageRatioHeight,
              right: currentWidth-uploadBox.right*imageRatioWidth,
              left: uploadBox.left*imageRatioWidth,
              bottom: uploadBox.bottom*imageRatioHeight
              });
            }
          ImageSubmitBoxCalculationUpload();
          };
        }, [linkBox, uploadImagePath, linkImagePath, currentHeight, currentWidth]);
    
      console.log("Test2")
      console.log("This is Box before render", box)
    
      return(
        <div className="center">
          <div className="absolute">
            <img id="inputimage" 
            src={imageURL} 
            width={imageResize}
            height='auto' 
            onLoad={onImgLoad} 
            ref={imageRef}/>
            <div className = "boundingbox" 
            style={{top: box.top, right: box.right, left: box.left, bottom: box.bottom}}>
            </div>
          </div>
        </div>
      );
    };

    export default ImageDisplay;