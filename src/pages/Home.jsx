import React from 'react';
import HomeSection from "../components/HomeSection";
import styled from "styled-components";
import Testimonial from '../components/Testimonial';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';
import About from '../components/About';

export default function Home() {
  return (
    <div className='hh'>
      <HomeSection/>
      <YTVideo src="https://www.youtube.com/embed/069gle2ZW4g?si=7BadyTVAE2F7gA5M" title="YouTube video player" ></YTVideo>
      <About/>
      <Testimonial/>
      <FAQ/>
      <Partners/>
    </div>
  )
}

const YTVideo=styled.iframe`
    width: 55rem;
    height: 30rem;
    margin: 2rem 0;
`;
