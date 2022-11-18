import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../images/htr-main-logo.png';
import exit from '../images/exit.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
          <Brand>
            <BrandLink href='/'>
              <ImageLogo src={logo} alt='logo' />
            </BrandLink>           
          </Brand> 
          <NavMenu open={menuOpen}>
            <MainGridNav>
              <NavlinkWrapper open={menuOpen}>
                <LinkBlockNav href='/'>
                  <TextNav>home</TextNav>
                </LinkBlockNav>
                <LinkBlockNav href='/about'>
                  <TextNav>about</TextNav>
                </LinkBlockNav>
                <LinkBlockNav href='/shop'>
                  <TextNav>shop</TextNav>
                </LinkBlockNav>
                <LinkBlockNav href='/contact'>
                  <TextNav>contact</TextNav>
                </LinkBlockNav>
              </NavlinkWrapper>
            </MainGridNav>
            <Exit onClick={() => setMenuOpen(!menuOpen)} open={menuOpen}>
              <CoverImage src={exit} />
            </Exit>
          </NavMenu>
          <ButtonsWrapper>
            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
              <TextMenu>
                <OpenClose open={menuOpen}>menu</OpenClose>
                <OpenClose whitetext open={menuOpen}>close</OpenClose>
              </TextMenu> 
            </MenuButton>
            <BgMenu open={menuOpen} />
          </ButtonsWrapper>
    </>
  )
}

export default Navbar;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Exit = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 40px;
  right: 35px;
  cursor: pointer;
  overflow: hidden;

  & ${CoverImage} {
  transform: ${props => props.open ? 'translate3d(0, 0, 0)' : 'translate3d(0,100%,0)'};
  transition: transform 0.5s cubic-bezier(0.85, 0, 0.15, 1);
  transition-delay: ${props => props.open ? '0s' : '0.4s'};
  }

  @media (max-width: 992px) and (min-width: 768px) {
    top: 40px;
  }
  @media (max-width: 767px){
    top: 25px;
  }
  @media (max-width: 992px) and (orientation: landscape) {
    top: 25px;
  }
  
`

const Brand = styled.div`
  position: fixed;
  z-index: 100;
  display: flex;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  top: 15px;
  left: 25px;

@media (max-width: 479px) {
  flex-direction: column;
  align-items: flex-start;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: start;
}
`
const BrandLink = styled.a`

`

const ImageLogo = styled.img`
  min-width: 90px;
  width: 20vw;
  max-width: 150px;
  object-fit: cover;

  @media (max-width: 992px) and (orientation: landscape) {
    width: 15vw;
  }
`

const NavMenu = styled.div`
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 101;
  min-height: 100vh;
  padding-top: 12vh;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  grid-column-end: 4;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-row-start: 1;
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
const MainGridNav = styled(MainGrid)`
  z-index: 5;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

@media (max-width: 992px) {
  grid-template-columns: 1fr 1fr;
}
` 
const NavlinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 2;
  transform: ${props => props.open ? 'translate3d(0,0vh,0)' : 'translate3d(0,-5vh,0)'};
  opacity: ${props => props.open ? '1' : '0'};
  transition: ${props => props.open ? 'all 0.25s ease-in-out 0.5s' : 'all 0.5s ease-in-out'};

  @media (max-width: 992px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`

const LinkBlockNav = styled.a`
  overflow: hidden;
  height: 7.4em;
  color: hsla(0, 0.00%, 100.00%, 1.00);
  text-decoration: none;


@media (max-width: 992px) and (orientation: landscape) {
  height: 5em;
}
`

const TextNav = styled.div`
  padding-top: 0em;
  font-family: Chloe;
  color: var(--offwhite);
  font-size: 6.8em;
  line-height: 1;
  text-transform: capitalize;

@media (max-width: 992px) and (orientation: landscape){
  font-size: 5em;
}

@media (max-width: 479px) {
  font-size: 5.5em;
}
`

const ButtonsWrapper = styled.div`
  position: fixed;
  top: 40px;
  right: 25px;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column-end: 4;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-row-start: 1;
  align-self: center;
  

  @media (max-width: 992px) and (min-width: 768px) {
    top: 40px;
  }
  @media (max-width: 767px){
    top: 25px;
  }
  @media (max-width: 992px) and (orientation: landscape) {
    top: 25px;
  }
`

const MenuButton = styled.div`
  position: relative;
  z-index: 102;
  display: flex;
  min-width: auto;
  padding-top: 9px;
  padding-right: 1.25em;
  padding-bottom: 9px;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 23px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

`

const TextMenu = styled.div`
  font-family: 'Ubuntu';
  position: relative;
  display: flex;
  flex-direction: column;
  height: 1rem;
  font-size: 1rem;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  overflow: hidden;

  @media (max-width: 768px) {
  font-size: 0.85rem;
  height: 0.85rem;
}
`

const BgMenu = styled.div`
  position: absolute;
  left: auto;
  right: 0%;
  bottom: auto;
  z-index: 100;
  width: ${props => props.open ? '400em' : '1.2em'};
  height: ${props => props.open ? '400em' : '1.2em'};
  margin-right: auto;
  margin-left: auto;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  background-color: var(--blue);
  transform: ${props => props.open ? 'translate3d(45em,40em,0)' : 'translate3d(0,0,0)'};
	transition: all 0.85s cubic-bezier(0.85, 0, 0.15, 1);


@media (max-width: 479px) {
  width: ${props => props.open ? '400em' : '1em'};
  height: ${props => props.open ? '400em' : '1em'};
}
`
const OpenClose = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${props => props.whitetext ? 'transparent' : 'var(--black)'};
  transform: ${props => props.open ? 'translate3d(0,-100%,0)' : 'translate3d(0, 0, 0)'};
  transition: transform 0.5s cubic-bezier(0.85, 0, 0.15, 1);
  transition-delay: ${props => props.open ? '0s' : '0.4s'};
`