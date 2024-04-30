import React from 'react';
import { styled } from 'styled-components';

export default function Schools() {
  return (
    <SchoolsWrapper>
      <div className='pages_header'>
        <h1>Schools</h1>
        <div className='pages_navigator'>
          <span className='pages_route'>Home | <span>Schools</span></span>
        </div>
      </div>
    </SchoolsWrapper>
  )
}

const SchoolsWrapper=styled.div`
    min-height: 100vh;
`;
