import React from 'react'
import VideoLanding from "./VideoSection/VideoLanding"
import InfoSection from "./InfoSection/index"
import Services from "./Services/index"
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './InfoSection/Data';

function LandingPage() {
  return (
    <div>
        <div>
            <VideoLanding/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
        </div>
        <div>
            Footer
        </div>
    </div>
  )
}

export default LandingPage