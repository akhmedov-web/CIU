import React from 'react'
import { styled } from 'styled-components';
import { FaRegHandshake } from "react-icons/fa";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Partners() {
    return (
        <PartnersWrapper>
            <div className='partnersSign'><FaRegHandshake /> Partners</div>
            <h1 className='partnersHeader'>Our Partners</h1>
            <PartnersCardWrapper
                className="layer"
                options={{
                    type: 'loop',
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '4rem',
                    autoplay: true,
                    interval: 2000,
                    // breakpoints: {
                    //   600: {
                    //     perPage: 1,
                    //   }
                    // }
                }}
            >
                <SplideSlide><img src="https://millatumidi.uz/assets/img/brand/b-logo2.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://beeline.uz/img/main/logo_light.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://www.epam.com/content/dam/epam/homepage/epam_logo_light.svg" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://mobi.uz/local/templates/main_v2/images/logo.svg" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://millatumidi.uz/assets/img/brand/b-logo8.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://www-file.huawei.com/-/media/corporate/images/home/logo/huawei_logo.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/220px-KPMG_logo.svg.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/790px-PricewaterhouseCoopers_Logo.svg.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://millatumidi.uz/assets/img/brand/b-logo3.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://static.tildacdn.com/tild3838-6635-4239-b263-623734373434/322212112_9.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://millatumidi.uz/assets/img/brand/b-logo1.png" alt="img" /></SplideSlide>
                <SplideSlide><img src="https://millatumidi.uz/assets/img/brand/b-logo4.png" alt="img" /></SplideSlide>
            </PartnersCardWrapper>
        </PartnersWrapper>
    )
}
const PartnersWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.partnersSign{
    color: #F76F4D;
    font-size: 18px;
}
.partnersHeader{
    font-size: 50px;
    margin-bottom: 3rem;
}

img{
    width: 130px;
}
`
const PartnersCardWrapper = styled(Splide)`
width: 100%;
background: #DBDEDF;
padding-top: 4rem;
padding-bottom: 4rem;
ul{
    display: flex;
    align-items: center;
}
`;