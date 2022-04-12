import React from 'react'
import VideoLanding from "./VideoSection/VideoLanding"
import InfoSection from "./InfoSection/index"
import { homeObjOne, homeObjTwo, homeObjThree } from './InfoSection/Data';

function LandingPage() {
  return (
    <div>
        <div>
            <VideoLanding/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </div>
        <div>
            Footer
        </div>
    </div>
  )
}

export default LandingPage