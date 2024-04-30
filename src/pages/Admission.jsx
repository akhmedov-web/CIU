import React from 'react';
import { styled } from 'styled-components';

export default function Scholarship() {
  return (
    <AdmissionWrapper>
      <div className='pages_header'>
        <h1>Admission</h1>
        <div className='pages_navigator'>
          <span className='pages_route'>Home | <span>Admission</span></span>
        </div>
      </div>
    </AdmissionWrapper>
  )
}

const AdmissionWrapper=styled.div`
    min-height: 100vh;
`;
