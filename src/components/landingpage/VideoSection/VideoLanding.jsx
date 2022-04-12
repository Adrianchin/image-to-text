import React, {useState} from 'react';
import Video from '../../../main_page_images/sushi.mp4';
import {Button} from '../ButtonElements';
import { 
    VideoLandingContainer,
    VideoLandingBg,
VideoBg,
VideoLandingContent,
VideoLandingH1,
VideoLandingP,
VideoLandingBtnWrapper,
} from './VideoLandingElements';

const VideoLanding = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <VideoLandingContainer id='home'>
        <VideoLandingBg>
            <VideoBg 
            autoPlay 
            loop 
            muted 
            src={Video} 
            type='video/mp4'
            />
        </VideoLandingBg>
        <VideoLandingContent>
            <VideoLandingH1>Reading Japanese Made Easy</VideoLandingH1>
            <VideoLandingP> Get assistance reading Japanese from anywhere. Difficult literiary texts and phrasing made easy!</VideoLandingP>
            <VideoLandingBtnWrapper>
                <Button 
                to='signup' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'

                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    Get Started
                </Button>
            </VideoLandingBtnWrapper>
        </VideoLandingContent>
    </VideoLandingContainer>
  )
}

export default VideoLanding