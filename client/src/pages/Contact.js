import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import desire from '../images/desire.svg';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import { InlineWidget } from 'react-calendly';

function Contact() {
  const [open, setOpen] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          toast.success('Message Sent!', {
            duration: 4000,
            style: {
              background: 'var(--offwhite)',
              color: 'var(--black)'
            },
            iconTheme: {
              primary: 'var(--blue)',
              secondary: 'var(--offwhite)'
            }
          });
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          toast.error('Oops! Something went wrong', {
            duration: 4000,
            style: {
              background: 'var(--maroon)',
              color: 'var(--offwhite)',
            },
            iconTheme: {
              primary: 'darkred',
              secondary: 'var(--offwhite)',
            }
          });
          console.log(error.text);
      });
  };

  return (
    <>
    <Toaster />
    <Section>
      <MainGrid>
        <HeaderPage>
          <CenterGrid>
            <ContentWrapper>
              <ParagraphLarge>
              Contact us now if you're ready to get started on that new journey!
              </ParagraphLarge>
            </ContentWrapper>
            <PaddingBottomMedium>
              <DetailText>
                Contact
              </DetailText>
            </PaddingBottomMedium>
          </CenterGrid>
          <DividerWrapper initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}>
            <DividerFill variants={dividers} />
          </DividerWrapper>
        </HeaderPage>
      </MainGrid>
    </Section>
    <Section>
      <Container>
        <PaddingMediumGrid>
          <SocialWrapper>
            <ListWrapper>
              <HeadingXSmall>social</HeadingXSmall>
              <ListLink href='https://www.instagram.com/healing_the_rainbow'>
                <HeadingSmall>Instagram</HeadingSmall>
              </ListLink>
              <ListLink href='https://www.facebook.com/healingtherainbowinyou'>
                <HeadingSmall>Facebook</HeadingSmall>
              </ListLink>
              <ListLink href='https://www.youtube.com/channel/UCZPig5QNaGO-Ri-5Knbq8GQ'>
                <HeadingSmall>YouTube</HeadingSmall>
              </ListLink>
            </ListWrapper>
            <FigureWrapper>
              <Icon src={desire} />
            </FigureWrapper>
          </SocialWrapper>
          <ContactWrapper>
            <ContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Phone</label>
                <input type="tel" name="phone" />
                <label>Message</label>
                <textarea name="message" />
                <CircleButton type="submit" value="Send">
                  <ButtonText>Send</ButtonText>
                  <InnerHover id='child'/>
                </CircleButton>
              </form>
            </ContactForm>
          </ContactWrapper>
        </PaddingMediumGrid>
      </Container>
    </Section>
    <Section>
      <CalendlyWrapper activate={open}>
        <InlineWidget url="https://calendly.com/healingtherainbow" styles={{
        backgroundColor: "var(--blue)",
        height: '1000px',
        }}/> 
        </CalendlyWrapper>
        <CenterGrid>
        <CalendlyButton onClick={()=>setOpen(!open)}>{ open ? 'Exit Scheduler' : 'Schedule Time With Me'  }</CalendlyButton>
        </CenterGrid>
        <CenterGrid>
        <CalendlyLink href="https://calendly.com/healingtherainbow" target="_blank">Schedule Time With Me</CalendlyLink>
        </CenterGrid>
    </Section>
    <Section>
        <OverflowWrapper>
          <Footer color='var(--black)' dark/>
        </OverflowWrapper>
      </Section>
    </>
  )
}

export default Contact;

const CalendlyLink = styled.a`
  display: none;
  text-decoration: none;
  width: 75%;
  font-family: 'Red Hat Text';
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  background-color: var(--maroon); 
  color: var(--offwhite); 
  position: relative;
  box-shadow: rgb(0 0 0 / 25%) 0 2px 5px;
  text-align: center;
  vertical-align: middle;
  margin: 0 auto;
  margin-bottom: 6vh;

  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;

  @media (max-width: 992px) and (orientation: landscape) {
    display: table-cell;
    width: 50%;
    margin-bottom: 20vh;
  }

  @media (max-width: 479px){
    display: table-cell;
    width: 85%;
  }
`

const CalendlyButton = styled.button`
  display: table-cell;
  width: auto;
  font-family: 'Red Hat Text';
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  background-color: var(--maroon); 
  color: var(--offwhite); 
  position: fixed;
  z-index: 1000;
  bottom: 15px;
  right: 25px;
  box-shadow: rgb(0 0 0 / 25%) 0 2px 5px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  @media (max-width: 992px) and (orientation: landscape){
    display: none;
  }

  @media (max-width: 479px) {
    display: none;
  }
`

const CalendlyWrapper = styled.div`
  ${props => props.activate ? `transform: scale(1) translate(-50%, -50%); visibility: visible;` : `transform: scale(0) translate(-50%, -50%); visibility: hidden;`};
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 998;
  top: 50%;
  left: 50%;
  overflow: scroll;
  background: var(--blue);
  transition: all 0.85s cubic-bezier(0.85, 0, 0.15, 1);

  @media (max-width: 992px) and (orientation: landscape) {
    display: none;
  }

  @media (max-width: 479px) {
    display: none;
  }
`

const dividers = {
  offscreen: {
    x: '-102%',
  },
  onscreen: {
    x: '0%',
    transition: {
      ease: [0.165, 0.84, 0.44, 1],
      duration: 0.8,
      delay: 0.2
    }
  }
}

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

  @media (max-width: 992px){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  }
`

const MainButton = styled.button`
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

@media (max-width: 992px) and (orientation: landscape) {
  width: 12em;
  height: 12em;
  font-size: 0.75rem;
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

const ContactForm = styled.div`
  width: 100%;

  @media (max-width: 992px) and (orientation: landscape) {
      display: flex;
      justify-content: center;
    }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 992px) and (orientation: landscape) {
      width: 75%;
    }

    label{
      font-family: "Red Hat Text";
      margin-bottom: 0.25rem;
      color:var(--black);
      font-size: 1.125rem;
      font-weight: 500;
      text-align: left;
    }

    input{
      font-family: 'Red Hat Text';
      font-weight: 500;
      height: 2rem;
      width: 100%;
      margin-bottom: 1.5rem;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      background-color: #F3E3CE;
      font-size: 1.125rem;
      border: 2px solid transparent;
      transition: border 0.3s ease;

      @media (max-width: 992px) and (min-width: 480px) {
        width: 75%;
      }

      @media (max-width: 992px) and (orientation: landscape) {
      width: 100%;
    }

      @media (max-width: 479px){
        width: 100%;
        font-size: 1rem;
      }
    }

    input:focus{
      outline: none;
      border-color: white;
    }

    textarea{
      font-family: 'Red Hat Text';
      font-weight: 500;
      min-height: 20vh;
      width: 100%;
      margin-bottom: 45px;
      padding: 1rem;
      border: none;
      background-color: #F3E3CE;
      border-radius: 12px;
      font-size: 1.125rem;
      border: 2px solid transparent;
      transition: border 0.3s ease;

      @media (max-width: 992px) and (min-width: 480px) {
        width: 75%;
      }

      @media (max-width: 992px) and (orientation: landscape) {
      width: 100%;
      height: 50vh;
    }

      @media (max-width: 479px){
        width: 100%;
        height: 33vh;
        font-size: 1rem;
      }
    }

    textarea:focus{
      outline: none;
      border-color: white;
    }
  }

`

const Icon = styled.img`
  height: 50px;
  animation: beating ease infinite 2s;

@media (max-width: 992px) {
  height: 60px;
  margin-bottom: 25px;
}
`

const HeadingSmall = styled.div`
  font-family: 'Red Hat Text';
  color: var(--black);
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
`

const ListLink = styled.a`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  text-decoration: none;
`

const HeadingXSmall = styled.div`
  font-family: 'Red Hat Text';
  font-size: 13px;
  line-height: 1.2;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 3vh;
`

const FigureWrapper = styled.div`
  position: relative;
  bottom: 0px;
  display: flex;
  width: 180px;
  height: 180px;
  margin-left: 0px;
  justify-content: flex-start;
  align-items: center;
`

const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 992px) and (orientation: landscape) {
      padding-bottom: 0;
    }

  @media (max-width: 479px) {
    padding-bottom: 0;
  }
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  padding-right: 25px;
  padding-left: 25px;
`

const DividerFill = styled(motion.div)`
  width: 100%;
  height: 3px;
  background-color: var(--black);
`

const DetailText = styled.div`
  font-family: 'Red Hat Text';
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  color: var(--black);
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;

@media (max-width: 479px){
  font-size: 14px;
}
`

const ParagraphLarge = styled.p`
  color: var(--black);
  font-family: 'Red Hat Text';
  font-size: 60px;
  line-height: 0.93;
  font-weight: 500;
  letter-spacing: -0.025em;
  text-transform: uppercase;

@media (max-width: 992px) and (orientation: landscape) {
  font-size: 7vw;
}

@media (max-width: 479px) {
  font-size: 38px;
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
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 6;
  grid-column-end: 13;
  align-self: start;

  @media (max-width: 992px){
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;   
  } 
`

const SocialWrapper = styled(ContentWrapper)`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 4;

  @media (max-width: 992px){
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;  
  }
`

const ContactWrapper = styled(ContentWrapper)`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 6;
  grid-column-end: 11;

  @media (max-width: 992px){
  margin-bottom: 6vh;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;   
  }

  @media (max-width: 992px) and (orientation: landscape) {
    margin-bottom: 12vh;
  }

  @media (max-width: 479px){
    margin-bottom: 12vh;
  }


`

const PaddingBottomMedium = styled(ContentWrapper)`
  padding-bottom: 110px;
  grid-column-start: span 2;
  grid-column-end: span 2;
  grid-row-start: span 1;
  grid-row-end: span 1;
  align-self: start;

  @media (max-width: 992px) and (orientation: landscape) {
    padding-bottom: 12vh;
  }
`

const DividerWrapper = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  height: 2px;
  margin-top: 90px;
  margin-bottom: 90px;

@media (max-width: 479px){
  margin-top: 45px;
  margin-bottom: 45px;
}
`

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${props => props.bgcolor ? `${props.bgcolor}` : 'var(--tan)'};
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

@media (max-width: 479px){
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
`

const PaddingMediumGrid = styled(MainGrid)`
padding-bottom: 110px;
margin-left: auto;
margin-right: auto;

@media (max-width: 992px) and (orientation: landscape) {
  padding-bottom: 0vh;
}

@media (max-width: 479px) {
  padding-bottom: 0vh;
}
`

const CenterGrid = styled(MainGrid)`
  align-items: center;
  align-content: center;
`

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1380px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;

@media (max-width: 992px) {
  padding-right: 30px;
  padding-left: 30px;
}
`

const HeaderPage = styled(ContainerWrapper)`
  padding-top: 160px;
  grid-column-end: 13;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;


@media (max-width: 992px) {
  padding-top: 180px;
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
}

@media (max-width: 479px){
  padding-top: 120px;
}
`