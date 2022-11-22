import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import gurl from '../images/gurl.jpg';
import rainbow from '../images/rainbow.jpg';
import { motion, useTransform, useScroll } from 'framer-motion';
import Lagirl from '../images/LAgirl.jpg';
import arrow from '../images/arrow-black.svg';
import Footer from '../components/Footer';
import {stepsList} from '../components/stepsList';

function About() {

  const [firstStepFlip, setFirstStepFlip] = useState(false);
  const [secondStepFlip, setSecondStepFlip] = useState(false);
  const [thirdStepFlip, setThirdStepFlip] = useState(false);

  const ref = useRef();
  const {scrollYProgress} = useScroll(ref);

  const rotate = useTransform(scrollYProgress, [0, 0.45], [-15, 5])
  const rotateZ = useTransform(scrollYProgress, [0, 0.45], [20, -5])

  const translateX = useTransform(scrollYProgress, [0, 0.45], ['-10vw', '0vw'])
  const x = useTransform(scrollYProgress, [0, 0.45], ['10vw', '0vw'])

  const translateY = useTransform(scrollYProgress, [0,0.45], ['10vh', '0vh'])
  const y = useTransform(scrollYProgress, [0, 0.45], ['-20vh', '0vh'])



  return (
    <>
      <Section>
        <HeroAreaGrid>
          <CenterWrapper>
            <TypeWrapper initial={{
              x: '-25vw',
              opacity: 0,
            }} animate={{
              x: '0vw', 
              opacity: 1,
              transition: {
                type:'spring',
                stiffness: 50,
                delay: 0.2,
                duration: 1
              }
            }}>
              <ParagraphXLarge nowrap>
                We are
                <WrapImage>
                  <CoverImage src={gurl} />
                </WrapImage>
              </ParagraphXLarge>
            </TypeWrapper>
            <TypeWrapper initial={{
              x: '25vw',
              opacity: 0,
            }} animate={{
              x: '0vw', 
              opacity: 1,
              transition: {
                type:'spring',
                stiffness: 50,
                delay: 0.4,
                duration: 1
              }
            }}>
              <ParagraphXLarge nowrap>
                Healing the
              </ParagraphXLarge>
            </TypeWrapper>
            <TypeWrapper initial={{
              x: '-25vw',
              opacity: 0,
            }} animate={{
              x: '0vw', 
              opacity: 1,
              transition: {
                type:'spring',
                stiffness: 50,
                delay: 0.6,
                duration: 1
              }
            }}>
              <ParagraphXLarge nowrap>
              <WrapImage> 
                <CoverImage src={rainbow} />
              </WrapImage>
              Rainbow
              </ParagraphXLarge>
            </TypeWrapper>
          </CenterWrapper>
          <OverflowWrapper />
        </HeroAreaGrid>
        <PaddingMediumGrid>
          <BottomWrapper>
            <ParagraphLarge initial={{ y: '5vh', opacity: 0}} whileInView={{ y: '0vh', opacity: 1 }} transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 0.8}} viewport={{ once: true, amount: 0.8}}>
            Healing The Rainbow (HTR) is for women who want to reinvent themselves and live life authentically on their terms. Who want to rediscover who they are by taking the pieces of their history and rewriting "her-story." Many of us have unresolved trauma that has stagnated our creative and feminine energy. We have built our lives around our trauma and have let what we’ve experienced subconsciously define what we can do, who we can be, and what we can have. Many of us are suffering from burnout and depression and anxiety because we feel out of touch with who we are and are feeling as if life is crumbling around us. We’ve been the wife, the mother, the friend, the significant other, the boss, etc. We wear all these coats, capes, and titles but we do not know who we really are in our skin or at our cores.
            </ParagraphLarge>
          </BottomWrapper>
        </PaddingMediumGrid>
      </Section>
      <Section bgcolor='#E7C79C'>
        <InnerPaddingLarge>
          <ContentWrapper>
            <Rotate ref={ref} style={{ rotate, translateX, translateY}}>
              <CoverImage src={Lagirl} />
            </Rotate>
            <Back style={{ rotateZ, x, y}}>
              <CoverImage src='./images/concretecolors.jpg' />
            </Back>
          </ContentWrapper>
          <ParagraphWrapper>
            <HeadingLarge>
              Tap into your inner magic
            </HeadingLarge>
          </ParagraphWrapper>
          <ParagraphWrapper second='true'>
            <MediumParagraph>
            HTR was created to help women tap back into who they are at their spiritual center and reconnect to the feminine essence of their being. Helping them to align themselves spiritually and heal themselves emotionally and physically. We are spiritual beings having a physical experience, so we have the power to shape our lives however we desire. But many of us live our lives from a script that we’ve allowed others to write. We are playing the understudies instead of being the leading ladies we can be and taking center stage. We envy women or compare ourselves to others thinking “what does she have that I don’t” or “I wish I were more like her” when the truth is not one of us has anything different than the other and we are more alike than we know. The difference is identifying, understanding, and breaking free of what is blocking you from releasing your inner magic.
            </MediumParagraph>
          </ParagraphWrapper>
        </InnerPaddingLarge>
      </Section>
      <Section>
        <CenterGrid>
          <TextWrapper>
            <Container>
              <MainGrid>
                <PaddingTopMedium>
                  <HeadingLarge>
                    Your new genesis awaits
                  </HeadingLarge>
                </PaddingTopMedium>
                <ContentWrapper second='true'>
                  <MediumParagraph>
                  HTR helps women to tap into their purpose, live empowered, and live authentically with our signature program series “Welcome to Your New Genesis”. Your New Genesis takes a holistic view of our client's mind, soul, and body awareness. Trauma can be emotional or physical. Although our experience may be a distant memory and we “feel” as if we have gotten past it, our subconscious mind and our bodies never forget unless they are reprogrammed.
                  </MediumParagraph>
                  <LinkWrapper href='/shop'>
                    <TextBlock>
                      View Series
                    </TextBlock>
                    <CTAarrow src={arrow}/>
                    <HoverUnderline />
                  </LinkWrapper>
                </ContentWrapper>
              </MainGrid>
            </Container>
          </TextWrapper>
          <RotateTen initial={{
            x: '10vw',
            y: '-20vh',
            rotateZ: 20,
          }} whileInView={{
            x: '0vw',
            y: '0vh',
            rotateZ: -5,
          }} transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 4, delay: 0.2 }} viewport={{ once: true, amount: 0.3}}>
            <ImageWrapper>
              <CoverImage src='./images/fist.jpg' />
            </ImageWrapper>
          </RotateTen>
          <Rotate15 initial={{ x: "-10vw" , y: "10vh", rotateZ: -15 }} whileInView={{ x: '0vw', y: '0vh' , rotateZ: 5 }} transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 4 }} viewport={{  once: true, amount: 0.3 }}>
            <Outline>
              <CoverImage src='./images/think.jpg' />
            </Outline>
          </Rotate15>
        </CenterGrid>
      </Section>
      <Section>
        <PaddingTopMedium>
          <CenterWrapper>
            <HeadingLarge>Our Process</HeadingLarge>
            <Subtitle>Click each step to learn more</Subtitle>
          </CenterWrapper>
        </PaddingTopMedium>
      
        <PaddingLargeGrid>
          <ProcessWrapper>
            
            <HeadingContent>
            <ThreeDWrapper onClick={() => setFirstStepFlip(!firstStepFlip)}>
            <CubeFront1st flip={firstStepFlip}>
                <ProcessHeading>
                    {stepsList[0].heading}
                </ProcessHeading>
                <Icon src={stepsList[0].icon} />
                <LineDivider />
            </CubeFront1st>
            <CubeBack1st flip={firstStepFlip}>
                <CubeHeadingWrap>
                  <TextLightFlip>{stepsList[0].heading}</TextLightFlip>
                    <InnerInfo>
                        <XSmallSpan>
                          {stepsList[0].paragraph}
                        </XSmallSpan>
                    </InnerInfo>
                </CubeHeadingWrap>
                <HoverImageWrap>
                  <CoverImage src={stepsList[0].image} />
                </HoverImageWrap>
              </CubeBack1st>
              </ThreeDWrapper>
            </HeadingContent>

            <HeadingContent>
            <ThreeDWrapper onClick={()=>setSecondStepFlip(!secondStepFlip)}>
            <CubeFront2nd flip={secondStepFlip}>
                <ProcessHeading>
                    {stepsList[1].heading}
                </ProcessHeading>
                <Icon src={stepsList[1].icon} />
                <LineDivider />
            </CubeFront2nd>
            <CubeBack2nd flip={secondStepFlip}>
                <CubeHeadingWrap>
                  <TextLightFlip>{stepsList[1].heading}</TextLightFlip>
                    <InnerInfo>                       
                        <XSmallSpan>
                          {stepsList[1].paragraph}
                        </XSmallSpan>
                    </InnerInfo>
                </CubeHeadingWrap>
                <HoverImageWrap>
                  <CoverImage src={stepsList[1].image} />
                </HoverImageWrap>
              </CubeBack2nd>
              </ThreeDWrapper>
            </HeadingContent>

            <HeadingContent>
            <ThreeDWrapper onClick={()=>setThirdStepFlip(!thirdStepFlip)}>
            <CubeFront3rd flip={thirdStepFlip}>
                <ProcessHeading>
                    {stepsList[2].heading}
                </ProcessHeading>
                <Icon src={stepsList[2].icon} />
                <LineDivider />
            </CubeFront3rd>
            <CubeBack3rd flip={thirdStepFlip}>
                <CubeHeadingWrap>
                  <TextLightFlip>{stepsList[2].heading}</TextLightFlip>
                    <InnerInfo>                       
                        <XSmallSpan>
                          {stepsList[2].paragraph}
                        </XSmallSpan>
                    </InnerInfo>
                </CubeHeadingWrap>
                <HoverImageWrap>
                  <CoverImage src={stepsList[2].image} />
                </HoverImageWrap>
              </CubeBack3rd>
              </ThreeDWrapper>
            </HeadingContent>

          </ProcessWrapper>
        </PaddingLargeGrid>
      </Section>
      <Section>
        <OverflowWrapper>
          <Footer color='var(--black)' dark/>
        </OverflowWrapper>
      </Section>
    </>
  )
}

export default About;

const Subtitle = styled.p`
font-family: 'Red Hat Text';
font-size: 1rem;
color: var(--black);
font-weight: 300;
opacity: 0.63;
`

const Icon = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  margin: 0 4%;
  padding-bottom: 0.8%;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) and (orientation: landscape) {
    width: 6vw;
    height: 6vw;
  }

  @media (max-width: 479px) {
    width: 12vw;
    height: 12vw;
  }
`

const HeadingContent = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  text-decoration: none;

@media (max-width: 992px) {
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
`

const InnerInfo = styled.div`
  margin-top: 2vw;

  @media (max-width: 479px){
    padding: 0px;
    margin-top: 3vw;
  }
`

const TextLightFlip = styled.div`
  position: relative;
  z-index: 2;
  font-family: Thunder;
  color: var(--tan);
  font-size: 70px;
  line-height: 0.85;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 992px) and (orientation: landscape) {
    font-size: 6vw;
    text-align: left;
  }

  @media (max-width: 479px){
    font-size: 12vw;
  }
`

const CubeHeadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 50%;
`

const CubeBack = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  z-index: 5;
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  transform: translate(0px, 210px) rotateX(-90deg);
  transform-origin: 50% 0%;
  color: var(--offwhite);
  font-size: 120px;
  transition: all 0.5s linear;
`
const CubeBack1st = styled(CubeBack)`
${props => props.flip ? 
`transform: translate3d(0px,0px,0px) rotateX(0deg);
transition: all 0.5s linear;
` :
`transform: translate3d(0px, 210px, 0px) rotateX(-90deg);
transition: all 0.4s linear;
`
}
`

const CubeBack2nd = styled(CubeBack)`
${props => props.flip ? 
`transform: translate3d(0px,0px,0px) rotateX(0deg);
transition: all 0.5s linear;
` :
`transform: translate3d(0px, 210px, 0px) rotateX(-90deg);
transition: all 0.4s linear;
`
}
`

const CubeBack3rd = styled(CubeBack)`
${props => props.flip ? 
`transform: translate3d(0px,0px,0px) rotateX(0deg);
transition: all 0.5s linear;
` :
`transform: translate3d(0px, 210px, 0px) rotateX(-90deg);
transition: all 0.4s linear;
`
}
`

const ProcessHeading = styled.div`
  position: relative;
  z-index: 2;
  font-family: Thunder;
  color: var(--black);
  font-size: 70px;
  line-height: 0.85;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 992px) {
    font-size: 12vw;
  }

  @media (max-width: 992px) and (orientation: landscape) {
    font-size: 6vw;
  }
  
  @media (max-width: 479px) {
    font-size: 12vw;
  }
`

const CubeFront = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--tan);
  perspective-origin: 50% 0%;
  transform: translate3d(0px, 0px, 2px);
  transform-origin: 50% 0%;
  text-transform: uppercase;
  transition: all 0.5s linear;
`
const CubeFront1st = styled(CubeFront)`
${props => props.flip ? 
`
transform: translate3d(0px,0px,-210px) rotateX(90deg);
background-color: #E3BD8C;
transition: all 0.425s linear;
` : `
transform: translate3d(0px, 0px, 0px);
transition: all 0.5s linear;
`};
`

const CubeFront2nd = styled(CubeFront)`
${props => props.flip ? 
`
transform: translate3d(0px,0px,-210px) rotateX(90deg);
background-color: #E3BD8C;
transition: all 0.425s linear;
` : `
transform: translate3d(0px, 0px, 0px);
transition: all 0.5s linear;
`};
`

const CubeFront3rd = styled(CubeFront)`
${props => props.flip ? 
`
transform: translate3d(0px,0px,-210px) rotateX(90deg);
background-color: #E3BD8C;
transition: all 0.425s linear;
` : `
transform: translate3d(0px, 0px, 0px);
transition: all 0.5s linear;
`};
`

const ThreeDWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: space-around;
  perspective: 2000px;
  transform: perspective(2000px);
  cursor: pointer;
 
 @media (max-width: 479px) {
  padding-right: 0px;
  padding-left: 0px;
}
`

const LineDivider = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  width: 100%;
  height: 2px;
  background-color: var(--black);
`

const HoverImageWrap = styled.div`
  position: relative;
  width: 300px;
  max-width: 50%;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  overflow: hidden;
`
const XSmallSpan = styled.div`
  font-family: 'Red Hat Text';
  color: var(--tan);
  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;
  text-align: left;
  margin-right: 2vw;

  @media (max-width: 479px) {
    margin-right: 3vw;
  }
`


const HeadingLarge = styled.div`
  font-family: Thunder;
  overflow: hidden;
  color:${props => props.textColor ? `${props.textColor}` : 'var(--black)'};
  font-size: 8.8em;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;

@media(max-width:992px){
  font-size: 15vw;
}

@media (max-width: 992px) and (orientation: landscape) {
  font-size: 7.5vw;
}
`

const ProcessWrapper = styled.div`
  
  grid-column-end: 12;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-row-start: 1;


  @media (max-width: 992px) {
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-row-start: 2;    
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  border-radius: 12px;

  @media (max-width: 992px) and (orientation: landscape) {
    height: 150vh;
    width: 67vw;
  }
`

const Outline = styled(ImageWrapper)`
  z-index: 6;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

@media (max-width: 992px) {
  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 992px) and (orientation: landscape) {
  height: 100vh;
  width: 67vw;
}
`

const HoverUnderline = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  width: 100%;
  height: 2px;
  background-color: var(--black);
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateX(-102%);

  @media (max-width: 992px) {
    transform: translateX(0%);
    transition: none;
  }
`

const CTAarrow = styled.img`
  width: 20px;
  margin-left: 15px;
`

const TextBlock = styled.div`
font-family: 'Red Hat Text';
`

const LinkWrapper = styled.a`
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 11px 0;
  align-items: center;
  box-shadow: inset 0 -3px 0 0 hsla(0, 0.00%, 0.00%, 0.10);
  color: var(--black);
  font-size: 20px;
  text-decoration: none;

  &:hover ${HoverUnderline}{
    transform: translateX(0%);
  }

@media (max-width: 992px) {
  font-size: 18px;
}

@media (max-width: 479px){
  margin-top: 3vh;
}
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1320px;
  padding: 0 25px; 
  margin-right: auto;
  margin-left: auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`

const TextWrapper = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 13;

  @media (max-width: 992px){
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  }

`

const MediumParagraph = styled.p`
  z-index: 2;
  margin-bottom: 45px;
  font-family: 'Red Hat Text';
  font-size: 1.4rem;
  font-weight: 300;
  color: ${props => props.textColor ? `${props.textColor}` : 'var(--black)'};
  max-width: 60ch;

@media (max-width: 992px){
  font-size: 1.25rem;
}

@media (max-width: 992px) and (orientation: landscape){
  font-size: 1.125rem;
  margin-bottom: 0px;
}

@media (max-width: 479px){
  font-size: 1rem;
  margin-bottom: 0px;
}
`

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${props => props.second === 'true' ? `grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 7;
  grid-column-end: 12;
  align-self: center;` : `  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 7;
  grid-column-end: 12;
  align-self: end;`};


  @media (max-width: 992px){
    padding: 6vh 30px 0vh 30px;
  ${props => props.second ? `  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;` : `grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;`};
}

@media (max-width: 479px) {
  padding: 2.5vh 10px 0vh 10px;
}

@media (max-width:992px) and (orientation: landscape){
  align-items: center;
  padding: 6vh 30px 0vh 30px;
}
`

const ImageFrameGallery = styled(motion.div)`
  overflow: hidden;
  height: 42vh;
  border-radius: 12px;

@media (max-width: 992px) {
  width: 75vw;
  height: auto;
}
`
const Rotate = styled(ImageFrameGallery)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  width: 45vw;
  height: 75vh;
  transform: rotate(-5deg);

@media (max-width: 992px) {
  width: 67vw;
}

@media (max-width: 992px) and (orientation: landscape){
  width: 67vw;
  height: 90vh;
}

@media (max-width: 479px){
  height: 67vh;
  width: 90vw;
}
`
const Back = styled(ImageFrameGallery)`
  position: absolute;
  left: auto;
  top: 15%;
  right: 0%;
  bottom: auto;
  width: 100%;
  height: 60vh;
  transform: rotate(37deg);

@media (max-width: 992px) {
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  width: 67vw;
  height: 100%;
}

@media (max-width: 992px) and (orientation: landscape){
  width: 67vw;
  height: 90vh;
}

@media (max-width: 479px){
  height: 67vh;
  width: 90vw;
}
`

const ContentWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  ${props => props.second === 'true' ? 
  `grid-column-end: 7;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-row-start: 2;` : 
  `grid-column-end: 6;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;`};


  @media (max-width: 992px){
  ${props => props.second ? 
  `
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-row-start: 2;
  ` : 
  `
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
  `};
  }

  @media (max-width: 992px) and (orientation: landscape){
    align-items: center;
  }
`

const RotateTen = styled(ContentWrapper)`
  transform: rotate(-10deg);
  margin-top: 25vh;
  grid-column-end: 12;
  grid-column-start: 7;
  grid-row-end: 3;
  grid-row-start: 1;
  align-self: center;

  @media (max-width: 992px) {
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-row-start: 2;   
  }

  @media(max-width: 992px) and (orientation: landscape){
    margin-top: 40vh;
  }
`

const Rotate15 = styled(ContentWrapper)`

  transform: rotate(15deg);
  padding-bottom: 110px;
  grid-column-end: 9;
  grid-column-start: 6;
  grid-row-end: 3;
  grid-row-start: 2;

  @media (max-width: 992px){
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-row-start: 3;
  }
`

const PaddingTopMedium = styled(ContentWrapper)`
z-index: 2;
padding-top: 12vh;
grid-row-start: span 1;
grid-row-end: span 1;
grid-column-start: span 8;
grid-column-end: span 8;

@media (max-width: 992px) {
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 4; 
}

@media (max-width: 992px) and (orientation: landscape){
align-items: center;
}
`

const ParagraphLarge = styled(motion.p)`
  font-family: 'Red Hat Text';
  color: var(--black);
  font-size: 1.4rem;
  font-family: 'Red Hat Text';
  line-height: 1.2;
  font-weight: 300;
  text-align: left;
  text-transform: none;
  pointer-events: none;
  max-width: 60ch;

@media (max-width: 992px){
  font-size: 1.25rem;
}

@media (max-width: 992px) and (orientation: landscape){
  font-size: 1.125rem;
}

@media (max-width: 479px) {
  font-size: 1rem;
}
`

const MainGrid = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  align-items: start;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;


@media (max-width: 992px) {
  grid-template-columns: 1fr 1fr;
}
`

const CenterGrid = styled(MainGrid)`
  align-items: center;
  align-content: center;
`

const InnerPaddingLarge = styled(MainGrid)`
padding: 12vh 25px;
margin-left: auto;
margin-right: auto;

@media (max-width: 992px) {
  padding: 24vh 25px 12vh 25px;
}

@media (max-width: 992px) and (orientation: landscape) {
  padding: 33vh 25px 12vh 25px;
}
`

const PaddingMediumGrid = styled(MainGrid)`
padding-bottom: 12vh;
`
const PaddingLargeGrid = styled(MainGrid)`
padding-bottom: 160px;

@media (max-width: 992px){
  padding-bottom: 12vh;
}
`

const OverflowWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  grid-column-end: 9;
  grid-column-start: 5;
  grid-row-end: 4;
  grid-row-start: 3;
  align-self: center;

  @media (max-width: 992px) {
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-row-start: 3;   
  }
`

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  object-fit: cover;
`

const WrapImage = styled.div`
  overflow: hidden;
  position: relative;
  bottom: 0vh;
  display: inline-block;
  width: 14rem;
  height: 7rem;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 100px;

@media (max-width: 992px) {
  margin: 0px 3vw;
  width: 20vw;
  height: 14.6vw;
}

@media (max-width: 992px) and (orientation: landscape) {
  margin: 0vw 2vw;
  width: 10vw;
  height: 7.3vw;
}
`

const ParagraphXLarge = styled.div`
  font-family: Thunder;
  overflow: hidden;
  color:${props => props.textColor ? `${props.textColor}` : 'var(--black)'};
  font-size: 10.9em;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  white-space: ${props => props.nowrap ? 'nowrap' : 'preline'};

@media (max-width: 992px) {
  font-size: 20vw;
}

@media (max-width: 992px) and (orientation: landscape) {
  font-size: 10vw;
}

@media (max-width: 479px) {
  font-size: 20vw;
}
`

const TypeWrapper = styled(motion.div)`
  max-width: 90vw;
`

const CenterWrapper = styled.div`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 13;
  align-self: center;
  margin-bottom: 25px;

  @media (max-width: 992px) {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  }
`

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${props => props.bgcolor ? `${props.bgcolor}` : 'var(--tan)'};
`

const HeroAreaGrid = styled(MainGrid)`
  padding-top: 25vh;
  padding-bottom: 12vh;
`

const BottomWrapper = styled(CenterWrapper)`
padding-right: 30px;
padding-left: 30px;
grid-row-start: 1;
grid-row-end: 4;
grid-column-start: 2;
grid-column-end: 12;
align-self: center;

@media (max-width: 992px) {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
}
`