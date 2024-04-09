import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from "styled-components";

export default function HomeSection() {
  return (
    <Wrapper
      options={{
        perPage: 1,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '4rem',
        autoplay: true,
        interval: 3000,
        // breakpoints: {
        //   600: {
        //     perPage: 1,
        //   }
        // }
      }}

    >
      <CarouselItemOne>
        <div className='layer'>
          <h1>hi 1</h1>
        </div>
      </CarouselItemOne>
      <CarouselItemTwo>
        <div className='layer'>
          <h1>hi 1</h1>
        </div>
      </CarouselItemTwo>
    </Wrapper>
  )
}

const Wrapper = styled(Splide)`
  width: 100%;
  height: 90vh;
  z-index: -10;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const CarouselItemOne = styled(SplideSlide)`
height: 80vh;
background-image: url("https://millatumidi.uz/static/media/university-new.42a9bf6306a14bfaf046.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
.layer{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.651);
}
`;
const CarouselItemTwo = styled(SplideSlide)`
height: 80vh;
background-image: url("https://millatumidi.uz/static/media/University2.f5e566c9098b1ad88734.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
.layer{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.651);
}
`;