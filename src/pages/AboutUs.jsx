import React from 'react';
import { styled } from 'styled-components';

export default function Scholarship() {
  return (
    <AboutUsWrapper>
      <div className='pages_header'>
        <h1>About Us</h1>
        <div className='pages_navigator'>
          <span className='pages_route'>Home | <span>About Us</span></span>
        </div>
      </div>
    </AboutUsWrapper>
  )
}

const AboutUsWrapper=styled.div`
    min-height: 100vh;
`;
