import React from 'react';
import './imageinput.css';

function imageinput({onImageInput, onButtonSubmit, imageURL}) {

console.log(imageURL);

    return (
        <div>
            <p className = 'f3 center'>
                Test for google api
            </p>
            <div className='center'>
                <div 
                className='form center pa4 br3 shadow-5'
                >
                    <input 
                    className='f4 pa2 w-70 center' 
                    type='text' 
                    onChange={onImageInput}/>
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick={onButtonSubmit}
                    >
                        Img URL Please
                    </button>
                </div>
            </div>
        </div>
      );
    }

export default imageinput