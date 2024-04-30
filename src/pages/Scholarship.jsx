import React from 'react';
import { styled } from 'styled-components';

export default function Scholarship() {
  return (
    <ScholarshipWrapper>
      <div className='pages_header'>
        <h1>Scholarship</h1>
        <div className='pages_navigator'>
          <span className='pages_route'>Home | <span>Scholarship</span></span>
        </div>
      </div>
      <div className="pages_body d-flex flex-column align-items-center layer py-5">
        <h2 className='my-4'>To support and motivate our students, we offer scholarships:</h2>
        <p style={{fontFamily:"sans-serif"}}>The Financial Aid Advisory and Grants Committee shall consist of a minimum of 2 faculty members, two academic deans or their designees, the Head of Undergraduate Admissions or a designee. The committee is responsible for developing the overarching policy for awarding undergraduate grants administered by Financial Aid and Grants, including the University's National and Guaranteed Grants. Additionally, Committee members recommend grant scoring formulas, review, and evaluate applications received from students seeking grant consideration.</p>
        <div className='scholarship_card_area my-4'>
          <div className='scholarship_card'>
            <h5>Academic Excellence</h5>
            <ol>
              <li>"You deserve it" 100% scholarship - <span className='sans-serif'>IELTS 7.0+ va SAT 1200+</span></li>
              <li>"Superhero" 50% scholarship - <span className='sans-serif'>SAT 1300+</span></li>
              <li>"Be Bright" 50% scholarship - <span className='sans-serif'>IELTS 7.5+</span></li>
              <p>Candidates for each grant must be interviewed by members of a special committee.</p>
            </ol>
          </div>
          <div className='scholarship_card'>
            <h5>Top Student</h5>
            <p className='sans-serif'>In the first academic year of MU University, it is presented to students with high attendance and academic results throughout the year, regardless of their major. A list of such candidates is formed and interviewed by the members of the special committee.</p>
          </div>
        </div>
        <h4>All the above grants are awarded for one academic year only!</h4>
      </div>
    </ScholarshipWrapper>
  )
}

const ScholarshipWrapper=styled.div`
    min-height: 100vh;
    .scholarship_card_area{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem; 
    }
    .scholarship_card{
      border: 2px solid #ED3B1F;
      border-radius: 3px;
      padding: 1rem;
    }
`;
