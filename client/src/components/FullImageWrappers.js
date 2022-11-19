import React from 'react'
import styled from 'styled-components';
import { imageList } from './imageList';
import { motion } from 'framer-motion';
import quotes from '../images/quotes.svg';

function FullImageWrappers() {

  return imageList.map((content, index) => (
    <Wrapper key={index}>
        <FullDivWrapper>
              <ImageWrapper variants={cardVariants}
            initial={'offscreen'} whileInView={'onscreen'} viewport={{once: true, amount: 0.33}}>
                <CoverImage src={content.image} alt=''/>
                <Overlay initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{ delay: 0.2 } }} viewport={{ once: true, amount: 0.7}}>
                  <ContentWrapper initial={{ y: '5vh', opacity: 0}} whileInView={{ y: '0vh', opacity: 1 }} transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 0.8, delay: 0.6}} viewport={{ once: true, amount: 0.7}}>
                  <Icon src={quotes}/>
                  <Paragraph>{content.paragraph}</Paragraph>
                  <HeadingSmall>{content.heading}</HeadingSmall>
                  </ContentWrapper>
                </Overlay>
              </ImageWrapper>
        </FullDivWrapper>
    </Wrapper>
  ))
} 

const ContentWrapper = styled(motion.div)`
display: inherit;
flex-direction: inherit;
align-items: inherit;
justify-content: inherit;

@media (max-width: 1200px) and (min-width: 992px) {
  padding-top: 3vh;
}
`

const Paragraph = styled.p`
font-size: 1.5rem;
font-family: 'Red Hat Text';
color: var(--offwhite);
font-weight: 400;
text-align: left;
max-width: 50ch;
margin-bottom: 6vh;

@media (max-width: 479px) {
  max-width: 90%;
  font-size: 14px;
  margin-bottom: 4vh;
}

@media (max-width: 992px) and (orientation: landscape) {
  font-size: 14px;
  margin-bottom: 2vw;
}

@media (max-width: 992px){
  font-size: 1.25rem;
  max-width: 90%;
}

@media (max-width: 1200px){
  margin-bottom: 2vh;
}
`

const Icon = styled.img`
width: 8rem;
margin-bottom: 6vh;


@media (max-width: 1200px) {
  margin-bottom: 3vh;
  width: 9vw;
}

@media (max-width: 992px){
  width: 12vw;
  margin-bottom: 4vh;
}

@media (max-width: 992px) and (orientation: landscape) {
  width: 8vw;
  margin-bottom: 2vw;
  margin-top: 3vw;
}

@media (max-width: 479px) {
  width: 12vw;
  margin-bottom: 4vh;
}
`

const Overlay = styled(motion.div)`
display: flex;
flex-direction: column;
top: 0;
right: 0;
bottom: 0;
left: 0;
position: absolute;
background: rgba(33, 22, 8, 0.67);
align-items: center;
justify-content: center;
`

const cardVariants = {
  offscreen: {
    transform: "scale(0.8)",
  },
  onscreen: {
    transform: "scale(1)",
    transition: {type:'ease-in', duration: 1}
  }
};

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
`
const FullDivWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-decoration: none;
  pointer-events: none;
`

const HeadingSmall = styled.div`
  font-family: Thunder;
  font-size: 8rem;
  color: var(--offwhite);

  @media (max-width: 1200px) {
    font-size: 9vw;
  }

  @media (max-width: 992px) {
  font-size: 12vw;
}


@media (max-width: 992px) and (orientation: landscape) {
    font-size: 8vw;
}

  @media (max-width: 479px) {
    font-size: 12vw;
  }
`

export default FullImageWrappers