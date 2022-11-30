import React from 'react';
import styled from 'styled-components'
import shoppingBag from '../images/shopping.svg'

function Shop() {
  return (
    <>
      <Section>
        <PageWrapper>
          <IconWrapper>
            <CoverImage src={shoppingBag}/>
          </IconWrapper>
          <HLPage>Shop coming soon</HLPage>
        </PageWrapper>
      </Section>
    </>
  )
}

export default Shop;

const HeadingLarge = styled.div`
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
  transform-origin: 0% 0%;
  font-family: Thunder;
  font-size: 8rem;
  line-height: 0.75;
  font-weight: 700;

  @media (max-width: 992px) {
    font-size: 15vw;
  }
  @media (max-width: 992px) and (orientation: landscape){
    font-size: 15vh;
  }
`

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const IconWrapper = styled.div`
height: 50vh;

@media (max-width: 992px) and (orientation: landscape){
  height: 75vh;    
}

@media (max-width: 479px){
  width: 90vw;
}
`

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${props => props.dark ? 'var(--black)' : 'var(--tan)'};
`
const PageWrapper = styled.div`
width: 100%;
height: 100%;
padding-left: 2.5vw;
padding-right: 2.5vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`