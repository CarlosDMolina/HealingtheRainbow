import React, { useRef } from 'react';
import styled from 'styled-components';
import gurl from '../images/gurl.jpg';
import heart from '../images/heart.svg';
import FullImageWrappers from '../components/FullImageWrappers';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import jump from '../images/jump.jpg';
import pink from '../images/pinkgirl.jpg';
import yellow from '../images/yellow.jpg';
import smile from '../images/smile.jpg';
import blue from '../images/blue.jpg';
import rainbow from '../images/rainbow.jpg';
import arrow from '../images/arrow-black.svg';

function Home() {
  const ref = useRef();
  const {scrollYProgress} = useScroll(ref);


  const rotate = useTransform(scrollYProgress, [0, 0.28], [-15,0]);

  const opacity = useTransform(scrollYProgress, [0, 0.02], [1,0]);

  const x = useTransform(scrollYProgress, [0.87, 0.95], ['0%', '-65%'])

  const translateX = useTransform(scrollYProgress, [0.87, 0.95], ['-65%', '0%'])

  return (
    <HomeWrapper>
      <Section>
        <MainGrid>
          <OverflowWrapper>
            <FullHeightGrid>
              <InnerHeroGrid>
                <CenterWrapper>
                  <XXLarge>Healing the Rainbow</XXLarge>
                </CenterWrapper>
              </InnerHeroGrid>
            </FullHeightGrid>
          </OverflowWrapper>
          <Wrapper style={{opacity, rotate: '8deg'}}>
            <ImageContainer initial={{
              translateX: '-100vw',
              translateY: '-21vh'
            }} animate={{
              translateX: '-25vw',
              translateY: '-6vh', 
            }} transition={{
              type:'spring',
              stiffness: 50,
              delay: 1.2,
              duration: 1
            }}  zindex='6'>
              <CoverImage src={jump} />
            </ImageContainer>
            <ImageContainer initial={{
              translateX: '33vw',
              translateY: '100vh'
            }} animate={{
              translateX: '15vw',
              translateY: '28vh'
            }} transition={{
              type:'spring',
              stiffness: 50,
              delay: 1.4,
              duration: 1
            }} zindex='7'>
              <CoverImage src={pink} />
            </ImageContainer>
            <ImageContainer initial={{
              translateX: '33vw',
              translateY: '-125vh'
            }} animate={{
              translateX: '10vw',
              translateY: '-25vh'
            }} transition={{
              type:'spring',
              stiffness: 50,
              delay: 1.6,
              duration: 1
            }} zindex='8'>
              <CoverImage src={yellow} />
            </ImageContainer>
            <ImageContainer initial={{
              translateX: '-45vw',
              translateY: '100vh'
            }} animate={{
              translateX: '-16vw',
              translateY: '18vh'
            }} transition={{
              type:'spring',
              stiffness: 50,
              delay: 1.8,
              duration: 1
            }} zindex='9'>
              <CoverImage src={smile} />
            </ImageContainer>
            <ImageContainer initial={{
              translateX: '100vw',
              translateY: '-19vh'
            }} animate={{
              translateX: '18vw',
              translateY: '-2vh'
            }} transition={{
              type:'spring',
              stiffness: 50,
              delay: 2,
              duration: 1
            }} zindex='10'>
              <CoverImage src={blue} />
            </ImageContainer>
            <ImageContainer initial={{
              translateX: '33vw',
              translateY: '-125vh'
            }} animate={{
              translateX: '0vw',
              translateY: '0vh',
              transition: {
                type:'spring',
                stiffness: 50,
                delay: 2.2,
                duration: 1
              }
            }} zindex='11'>
              <CoverImage src={rainbow} />
            </ImageContainer>
          </Wrapper>
        </MainGrid>
        <MainGridPadding>
          <TopDivider 
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }} >
            <DividerFill variants={dividers} />
          </TopDivider>
          <FirstTitle 
          initial='off'
          whileInView='on'
          viewport={{ once: true, amount: 0.3}}
          ><HLPage variants={headerSlide}>live life</HLPage></FirstTitle>
          <SecondTitle
          initial='off'
          whileInView='on'
          viewport={{ once: true, amount: 0.3}}><HLPage variants={headerSlide}>authentically</HLPage></SecondTitle>
          <ThirdTitle
          initial='off'
          whileInView='on'
          viewport={{ once: true, amount: 0.3}}><HLPage variants={headerSlide}>on your terms</HLPage></ThirdTitle>
        </MainGridPadding>
        <InnerPaddingLarge>
          <ContentWrapper>
              <RotateGallery id='example' ref={ref} style={{rotate}}>
                <CoverImage src={gurl} alt='girl sitting' />
              </RotateGallery>
          </ContentWrapper>
          <BottomDivider
           initial='offscreen'
           whileInView='onscreen'
           viewport={{ once: true }} >
            <DividerFill variants={dividers}/>
          </BottomDivider>
          <ParagraphWrapper>
            <HeadingSmall uppercase>About</HeadingSmall>
            <Figure><Heart src={heart} alt='heart icon'/></Figure>
            <PWrapper><Medium>Healing The Rainbow (HTR) is for women who want to reinvent themselves and live life authentically on their terms. Who want to rediscover who they are by taking the pieces of their history and rewriting "her-story."</Medium></PWrapper>
            <LinkWrapper href='/about'>
                <TextBlock>
                    Learn more
                </TextBlock>
                <CTAarrow src={arrow}/>
                <HoverUnderline />
              </LinkWrapper>
          </ParagraphWrapper>
          <Box>
            <CTAparagraph initial={{ x: '-2vw', opacity: 0}} whileInView={{ x: '0vw', opacity: 1 }} transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 0.8}} viewport={{ once: true, amount: 0.8}}>
            When it comes to your growth, there is no one-size-fits-all solution. We offer a variety of coaching programs to suit your individual needs. Whether you're looking for personal guidance, or you prefer to learn in a group setting, we have something for everyone. Click here to view our selection of one-on-one coaching, group coaching, retreats, workshops, and digital courses. 
            </CTAparagraph>
            <CircleButton href='/shop'>
              <ButtonText>Shop healing</ButtonText>
              <InnerHover id='child'/>
            </CircleButton>
          </Box>
        </InnerPaddingLarge>
      </Section>
      <Section dark>
       <FullImageWrappers />
      </Section>
      <Section dark>
        <OverflowWrapper mediumpadding>
          <TickerGrid>
            <FlexTicker first>
              <HeadingXLarge style={{x}}>
                Turning history into her-story
              </HeadingXLarge>
            </FlexTicker>
            <FlexTicker second>
              <HeadingXLarge textColor='var(--blue)' style={{translateX}}>
                turning history into her-story
              </HeadingXLarge>
            </FlexTicker>
          </TickerGrid>
        </OverflowWrapper>
      </Section>
      <Section dark>
        <OverflowWrapper>
          <Footer color='var(--offwhite)'/>
        </OverflowWrapper>
      </Section>
    </HomeWrapper>
  )
}

export default Home;

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

const dividers = {
  offscreen: {
    x: '-102%',
  },
  onscreen: {
    x: '0%',
    transition: {
      ease: 'linear',
      duration: 0.7,
      delay: 0.2
    }
  }
}

const headerSlide = {
  off: {
    y: '130%',
    skew: '5deg'
  },
  on: {
    y: '0%',
    skew: '0deg',
    transition: {
      ease: [1,0,0,1],
      duration: 1.4
    }
  }
};

const ImageContainer = styled(motion.div)`
position: absolute;
overflow: hidden;
width: 100%;
height: 100%;
z-index: ${props => props.zindex};
`

const Wrapper = styled(motion.div)`
  position: relative;
  z-index: 5;
  overflow: visible;
  width: 30vw;
  max-width: 500px;
  height: 30vw;
  max-height: 500px;
  margin-right: auto;
  margin-left: auto;
  transform: rotate(8deg);
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;
  align-self: center;

  @media (max-width: 992px) {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  }

  @media (max-width: 479px) {
  width: 50vw;
  height: 50vw;
  }
`

const HomeWrapper = styled.div``

const HeadingXLarge = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: block;
  margin-top: 0px;
  font-family: Thunder;
  color: ${props => props.textColor ? `${props.textColor}` : 'var(--khaki)'};
  font-size: 24.5vw;
  line-height: 0.8;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 2vh;
  letter-spacing: -0.01em;
  white-space: nowrap;

@media (max-width: 768px){
  padding-top: 5vh;
}

@media (max-width: 479px) {
  padding-top: 2vh;
}
`
const FlexTicker = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: left;

  ${props => props.first ?
  `padding-left: 10px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;` : null
};

${props => props.second ?
  `padding-left: 10px;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 5;
  grid-row-start: 3;` : null
};

@media (max-width: 479px){
  padding-left: 5px;
}

`

const TickerGrid = styled.div`
  display: grid;
  width: 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
`
const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${props => props.dark ? 'var(--black)' : 'var(--tan)'};

  ${props => props.dark ? `` : `@media (max-width: 992px ) and (orientation: landscape) {
  padding-top: 20vh;
}

@media (max-width: 479px) {
  padding-top: 0vh;
}`};
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
  grid-template-columns: ${props => props.footer ? '2fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'};
  grid-template-rows: auto;

@media (max-width: 992px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}

@media (max-width: 479px) {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
`
const OverflowWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;
  ${props => props.mediumpadding ? `padding: 120px 0px;` : null};

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  }
`

const FullHeightGrid = styled(MainGrid)`
  overflow: hidden;
  height: 100vh;
`

const InnerHeroGrid = styled.div`
  display: grid;
  width: 85%;
  height: 100%;
  justify-content: center;
  align-content: center;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: space-between;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 3;
  align-self: center;
  justify-self: center;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3; 
  }
`
const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  align-self: center;
`
const XXLarge = styled.div`
  overflow: hidden;
  padding-top: 5vw;
  font-family: Chloe;
  color: var(--offwhite);
  font-size: 18vw;
  line-height: 0.7;
  font-weight: 400;
`

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
`

const MainGridPadding = styled(MainGrid)`
  padding-right: 30px;
  padding-left: 30px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-rows: auto;
  line-height: 1.352116082116082;
`
const DividerWrapper = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  height: 2px;
  margin-top: 90px;
  margin-bottom: 90px;

  @media (max-width: 479px) {
  margin-top: 45px;
  margin-bottom: 45px;
}
`
const TopDivider = styled(DividerWrapper)`
  grid-column-start: 2;
  grid-column-end: 12;
  grid-row-start: 1;
  grid-row-end: 2;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  }
`
const BottomDivider = styled(DividerWrapper)`
  padding: 0 30px;
  grid-column-start: 2;
  grid-column-end: 12;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  }
`
const DividerFill = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: var(--black);
`
const FirstTitle = styled(OverflowWrapper)`
  grid-column-start: 2;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  }
`
const SecondTitle = styled(OverflowWrapper)`
  grid-column-start: 2;
  grid-column-end: 13;
  grid-row-start: 3;
  grid-row-end: 4;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  }
`
const ThirdTitle = styled(OverflowWrapper)`
  grid-column-start: 2;
  grid-column-end: 13;
  grid-row-start: 4;
  grid-row-end: 5;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  }
`
const HeadingLarge = styled(motion.div)`
  position: relative;
  z-index: 2;
  font-family: Chloe;
  color: var(--black);
  font-size: 15vh;
  line-height: 0.85;
  font-weight: 400;
  text-transform: uppercase;
`
const HLPage = styled(HeadingLarge)`
  padding-top: 4vh;
  transform-origin: 0% 0%;
  font-family: Thunder;
  font-size: 17vw;
  line-height: 0.65;
  font-weight: 700;
`
const InnerPaddingLarge = styled(MainGrid)`
  padding-top: 160px;
  padding-bottom: 160px;

@media (max-width: 992px) {
  padding-top: 12vh;
  padding-bottom: 12vh;
}
`
const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;

  @media (max-width: 992px) {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  }
`
const RotateGallery = styled(motion.div)`
  overflow: hidden;
  position: relative;
  z-index: 2;
  width: 45vw;
  height: 75vh;

@media (max-width: 992px) {
  width: 90vw;
  height: auto;
}
`
const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 120px;
  padding-bottom: 120px;
  grid-column-start: 8;
  grid-column-end: 12;
  grid-row-start: 1;
  grid-row-end: 2;
  align-self: center;

 @media (max-width: 992px) {
  padding-top: 8vh;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  align-self: center;
}
`
const HeadingSmall = styled.div`
  font-family: Chloe;
  font-size: 1.75rem;
  line-height: 1.2;
  font-weight: 400;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`
const Figure = styled.div`
  position: relative;
  padding-top: 45px;
  padding-bottom: 45px;


@media (max-width: 992px) {
  padding-top: 4vh;
  padding-bottom: 4vh;
}
`
const Heart = styled.img`
  width: 50px;
  animation: beating ease infinite 2s;
  pointer-events: none;
`
const PWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  perspective: 2000px;
  padding-bottom: 110px;


@media (max-width: 992px) {
  padding-bottom: 8vh;
}
`
const Medium = styled(motion.p)`
  font-size: 1.4rem;
  font-family: 'Red Hat Text';
  line-height: 1.2;
  font-weight: 300;
  text-transform: none;
  pointer-events: none;

  @media (max-width: 992px) and (orientation: landscape) {
    font-size: 1.125rem;
    max-width: 60ch;
  }

  @media (max-width: 992px) {
    font-size: 1.25rem;
  }
`
const Box = styled(PWrapper)`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 3;
  align-self: start;
 
  @media (max-width: 992px) {
  margin-bottom: 4vh;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  align-self: start;
}
`
const CTAparagraph = styled(Medium)`
margin-bottom: 45px;
`
const MainButton = styled.a`
  padding: 25px 35px;
  border: 2px solid hsla(33.599999999999994, 60.98%, 8.04%, 0.30);
  border-radius: 100px;
  background-color: transparent;
  transition: box-shadow 200ms ease;
  font-family: 'Red Hat Text';
  color: var(--offwhite);
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
`
const CircleButton = styled(MainButton)`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 15em;
  height: 15em;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  border-style: none;
  border-radius: 100%;
  background-color: var(--dark-gold);
  box-shadow: rgb(0 0 0 / 25%) 0 2px 5px;
  color: var(--offwhite);
  white-space: normal;

&:hover #child{
  transform: scale(1);
}

@media (max-width: 479px) {
  width: 12em;
  height: 12em;
  font-size: 0.75rem;
}
`
const ButtonText = styled.div`
  position: relative;
  z-index: 7;
`

const InnerHover = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: var(--blue);
  transform: scale(0);
  transition: transform 0.6s cubic-bezier(.23, 1, .32, 1);

  @media (max-width: 992px){
    transform: scale(1);
  }
`