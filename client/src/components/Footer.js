import React from 'react';
import styled from 'styled-components';
import logo from '../images/footerlogo.png';
import insta from '../images/instawhite.svg';
import facebook from '../images/facebook-white.svg';
import youtube from '../images/youtube.svg';
import youtubeDark from '../images/youtubeDark.svg'; 
import power from '../images/power.svg';
import desire from '../images/desire.svg';
import { motion } from 'framer-motion';
import instaDark from '../images/instagram-icon.svg';
import facebookDark from '../images/facebook-icon.svg';

function Footer({color, dark}) {
  return (
    <FooterWrapper>
            <InnerSection>
              <OverflowWrapper>
                <Ticker mediumpadding outline={color}>
                  <InnerTickerWrapper variants={ticker} initial='start' animate='end'>
                    <ParagraphLarge textColor={color}>
                    Live from a place of <FontSpan>power</FontSpan>
                    </ParagraphLarge>
                    <TickerIcon src={power}/>
                    <ParagraphLarge textColor={color}>
                      <FontSpan>Live</FontSpan> the life you desire
                    </ParagraphLarge>
                    <TickerIcon src={desire}/>
                  </InnerTickerWrapper>
                  <InnerTickerWrapper variants={ticker} initial='start' animate='end'>
                    <ParagraphLarge textColor={color}>
                    Live from a place of <FontSpan>power</FontSpan>
                    </ParagraphLarge>
                    <TickerIcon src={power}/>
                    <ParagraphLarge textColor={color}>
                      <FontSpan>live</FontSpan> the life you desire
                    </ParagraphLarge>
                    <TickerIcon src={desire}/>
                  </InnerTickerWrapper>
                  <InnerTickerWrapper variants={ticker} initial='start' animate='end'>
                    <ParagraphLarge textColor={color}>
                    Live from a place of <FontSpan>power</FontSpan>
                    </ParagraphLarge>
                    <TickerIcon src={power}/>
                    <ParagraphLarge textColor={color}>
                      <FontSpan>live</FontSpan> the life you desire
                    </ParagraphLarge>
                    <TickerIcon src={desire} />
                  </InnerTickerWrapper>
                </Ticker>
              </OverflowWrapper>
              <Container>
                <MainGrid footer>
                  <LogoWrapper>
                    <LogoFooter src={logo} alt='secondary logo'/>
                  </LogoWrapper>
                  <LinkWrapper>
                    <SmallLink textColor={color} href='/'>home</SmallLink>
                    <SmallLink textColor={color} href='/about'>about</SmallLink>
                    <SmallLink textColor={color} href='shop'>shop</SmallLink>
                    <SmallLink textColor={color} href='/contact'>contact</SmallLink>
                  </LinkWrapper>
                  <InfoWrapper>
                    <MainParagraph textColor={color}>info@healingtherainbow.com<br/>319-883-7868<br/>Houston, Tx. 77033</MainParagraph>
                  </InfoWrapper>
                  <SignatureWrapper>
                    <MainParagraph textColor={color}>Made by</MainParagraph>&nbsp;<FontSpan textColor={color}>Team 3</FontSpan>
                  </SignatureWrapper>
                  <CopyrightWrapper>
                    <MainParagraph textColor={color}>
                    Healing the Rainbow © {(new Date().getFullYear())}
                    </MainParagraph>
                  </CopyrightWrapper>
                  <SocialsWrapper>
                    <Grid>
                      <SocialLinks href='https://www.instagram.com/healing_the_rainbow'>
                        {dark ?  
                        <Icon src={instaDark}/> : 
                        <Icon src={insta}/>
                        }
                      </SocialLinks>
                      <SocialLinks href='https://www.facebook.com/healingtherainbowinyou'>
                        {dark ?
                        <Icon src={facebookDark}/> : 
                        <Icon src={facebook}/>
                        }
                      </SocialLinks>
                      <SocialLinks href='https://www.youtube.com/channel/UCZPig5QNaGO-Ri-5Knbq8GQ'>
                        {dark ?
                        <Icon src={youtubeDark} /> : 
                        <Icon src={youtube}/>
                        }
                      </SocialLinks>
                    </Grid>
                  </SocialsWrapper>
                </MainGrid>
              </Container>
            </InnerSection>
          </FooterWrapper>
  )
}

export default Footer;

const ticker = {
  start: {
    x: '0%'
  },
  end: {
    x: '-100%',
    transition: {
      ease: [0,0,0,0],
      repeat: Infinity,
      duration: 10,
    }
  }
}

const Icon = styled.img`
height: 100%;
`

const SocialLinks = styled.a`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 8px 5px;
  justify-content: center;
  align-items: center;
  grid-column-start: span 1;
  grid-column-end: span 1;
  grid-row-start: span 1;
  grid-row-end: span 1;
`

const Grid = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  gap: 5px;

@media (max-width: 479px) {
  width: 100%;
}
`

const SocialsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-column-start: 5;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 3;
  align-self: end;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 6;
  }
`

const CopyrightWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 4;
  }
`

const SignatureWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-align: left;
  grid-column-start: 11;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 3;


@media (max-width: 992px){
  justify-content: flex-start;
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 5;
}

`

const MainParagraph = styled.div`
  font-family: 'Red Hat Text';
  color: ${props => props.textColor};
  text-align: right;
  opacity: 0.63;

@media (max-width: 992px) {
  text-align: left;
}
`

const SmallLink = styled.a`
  opacity: 0.63;
  transition: opacity ease 300ms;
  font-family: 'Red Hat Text';
  color: ${props => props.textColor};
  font-weight: 400;
  text-align: right;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
  opacity: 1;
  }

  @media (max-width: 992px) {
  margin-bottom: 4px;
  text-align: left;
  }
`

const LogoFooter = styled.img`
  min-width: 90px;
  width: 20vw;
  max-width: 150px;
  margin-bottom: 60px;
  object-fit: cover;
  pointer-events: none;

@media (max-width: 479px) {
  margin-bottom: 10px;
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
  color: #fff;

@media (max-width: 992px) {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}

@media (max-width: 479px) {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
`

const FooterWrapper = styled.div`
width: 100%;
`
const InnerSection = styled.div`
  overflow: hidden;
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
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;
  ${props => props.mediumpadding ? `padding: 120px 0px;` : null};
`

const Ticker = styled.div`
  display: flex;
  align-items: center;

  ${props => props.outline ? `border-top-style: solid;
  border-top-width: 2px;
  border-top-color: ${props.outline};` : null}
  

  ${props => props.mediumpadding ? `padding: 120px 0px;` : null};

  @media (max-width: 992px) {
  padding-top: 8vh;
  padding-bottom: 8vh;
}
`

const InnerTickerWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  @media (max-width: 479px) {
  justify-content: flex-start;
}
`

const ParagraphLarge = styled.div`
  font-family: 'Red Hat Text';
  color: ${props => props.textColor ? `${props.textColor}` : 'var(--black)'};
  font-size: 60px;
  line-height: 0.93;
  font-weight: 600;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  opacity: 0.85;

  @media (max-width: 479px){
  font-size: 18px;
}
`
const FontSpan = styled.span`
  color: ${props => props.textColor};
  font-family: Impact;
  letter-spacing: 0;
  opacity: 1;
`

const TickerIcon = styled.img`
  height: 55px;
  margin-right: 4em;
  margin-left: 4em;
  
@media (max-width: 479px){
  height: 25px;
  margin-right: 20px;
  margin-left: 20px;
}
`
const Container = styled.div`
  position: relative;
  padding: 0 25px 4vh 25px;
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

  
`

const LogoWrapper = styled(ContentWrapper)`
  grid-column-start: span 2;
  grid-column-end: span 2;
  grid-row-start: span 1;
  grid-row-end: span 1;

  @media (max-width: 992px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`
const LinkWrapper = styled(ContentWrapper)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  align-items: flex-end;
  grid-column-start: 8;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 2;

@media (max-width: 992px){
  align-items: flex-start;
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
`

const InfoWrapper = styled(ContentWrapper)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  align-items: flex-end;
  grid-column-start: 11;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;

@media (max-width: 992px) {
  align-items: flex-start;
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
}
`