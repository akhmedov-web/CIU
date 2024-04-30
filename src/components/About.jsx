import React from 'react'
import MButton from "./MButton.jsx";
import { styled } from 'styled-components';
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
    return (
        <AboutWrapper className='layer d-flex row row-cols-2 py-5'>
            <div className='col position-relative'>
                <img src="https://millatumidi.uz/assets/img/features/university-heder-about.jpg" alt="img" />
                <div className='aboutCard'>
                    <span>4 +</span>
                    <p>Years Market Presence</p>
                </div>
            </div>
            <div className='col d-flex flex-column justify-content-between align-items-start px-5 py-3'>
                <h1>A Few Words About the University</h1>
                <p>MU University is a unique educational institution, which was established in 2020 and is the recognized standard for quality education in the world. Millat Umidi University gives its students the opportunity to gain specialized knowledge and extensive possibilities for further learning and choosing their own path in life.</p>
                <MButton>Read More<FaArrowRightLong className='ms-2' /></MButton>
            </div>
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
    width: 100%;
    h1{
        font-size: 50px;
    }
    p{
        font-family: sans-serif;
        color: #245b73;
        font-size: 18px;
        line-height: 28px;
    }
    img{
        height: auto;
        width: 100%;
        border-radius: 20px;
    }
    .aboutCard{
        position: absolute;
        overflow: hidden;
        padding: 5px 4rem;
        background: #F13C20;
        border-radius: 10px;
        text-align: center;
        right: 5rem;
        bottom: -4rem;
        &:after{
            background: #125875;
            bottom: 0;
            content: "";
            display: inline-block;
            height: 6px;
            left: 0;
            position: absolute;
            width: 100%;
        }
        span{
            color: #fff;
            display: inline-block;
            font-size: 50px;
            font-weight: 600;
            position: relative;
        }
        p{
            color: #fff;
        }
        }
    }
`