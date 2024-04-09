import React from 'react';
import HomeSection from "../components/HomeSection";
import styled from "styled-components";
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div className='hh'>
      <HomeSection/>
      <YTVideo src="https://www.youtube.com/embed/069gle2ZW4g?si=7BadyTVAE2F7gA5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></YTVideo>
      <Testimonial/>
    </div>
  )
}

const YTVideo=styled.iframe`
    width: 55rem;
    height: 30rem;
    margin: 2rem 0;
`;
