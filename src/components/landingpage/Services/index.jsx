import React from 'react'
import Icon4 from '../../images/svg-4.svg';
import Icon5 from '../../images/svg-5.svg';
import Icon6 from '../../images/svg-6.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help to reduce your fees and increse your revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>Access online anywhere any time!</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Premium Services</ServicesH2>
                <ServicesP>Unlock the special membership card that returns 5% cash back</ServicesP>
            </ServicesCard>
        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services