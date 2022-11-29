import React from 'react';
import styled from 'styled-components'

function Shop() {
  return (
    <>
      <Section>
        <PageWrapper>
          <IconWrapper>
            <CoverImage />
          </IconWrapper>
        </PageWrapper>
      </Section>
    </>
  )
}

export default Shop;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  object-fit: cover;
`

const IconWrapper = styled.div`
height: 33vh;
`

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${props => props.dark ? 'var(--black)' : 'var(--tan)'};

  ${props => props.dark ? `` : `@media (max-width: 992px ) and (orientation: landscape) {
  padding-top: 20vh;
}

@media (max-width: 479px) {
  padding-top: 0vh;
}`};
`
const PageWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`