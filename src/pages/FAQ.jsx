import React from 'react';
import { styled } from 'styled-components';
import { Collapse } from 'antd';

export default function Scholarship() {
  const text = `
  You can register through the 'APPLY NOW' button and upload your documents. Additionally, you can stop by the office and get face to face consultations.
      `;

  const items = [
    {
      key: '1',
      label: "What's the mission of Millat Umidi University",
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: "What kind of majors are there at MU University?",
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: "Where is MU University located?",
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: "Can I submit my documents in person?",
      children: <p>{text}</p>,
    },
    {
      key: '5',
      label: "Are the certificates other than IELTS accepted?",
      children: <p>{text}</p>,
    },
    {
      key: '6',
      label: "What's the mission of Millat Umidi University",
      children: <p>{text}</p>,
    },
    {
      key: '7',
      label: "Are the certificates other than IELTS accepted",
      children: <p>{text}</p>,
    },
    {
      key: '8',
      label: "What kind of majors are there at MU University?",
      children: <p>{text}</p>,
    },
    {
      key: '9',
      label: "Can I submit my documents in person?",
      children: <p>{text}</p>,
    },
    {
      key: '10',
      label: "Where is MU University located?",
      children: <p>{text}</p>,
    },
  ];
  return (
    <FAQWrapper>
      <div className='pages_header'>
        <h1>FAQ</h1>
        <div className='pages_navigator'>
          <span className='pages_route'>Home | <span>FAQ</span></span>
        </div>
      </div>
      <div className='pages_body row layer'>
        <div className="col-5">
          <YTVideo src="https://www.youtube.com/embed/069gle2ZW4g?si=7BadyTVAE2F7gA5M" title="YouTube video player" ></YTVideo>
        </div>
        <div className="col-7">
          <Collapse items={items} defaultActiveKey={['1']} size="large" />
        </div>
      </div>
    </FAQWrapper>
  )
}

const FAQWrapper = styled.div`
    min-height: 100vh;
    .pages_body{
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
`;

const YTVideo = styled.iframe`
    width: 100%;
    height: 30rem;
    margin: 2rem 0;
`;
