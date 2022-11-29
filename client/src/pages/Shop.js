import React from 'react';
import styled from 'styled-components'

function Shop() {
  return (
    <>
      <Section>

      </Section>
    </>
  )
}

export default Shop;

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