import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";

export default function Footer() {
    return (
        <Foot className='layer'>
            <div className='footer_top'>
                <div className="footerAbout">
                    <div className='footerHead'>
                        <h2>About Us</h2>
                    </div>
                    <p>
                        MU University is a unique educational institution, which was established in 2020 and is the recognized standard for quality education in the world. Millat Umidi University gives its students the opportunity to gain specialized knowledge and extensive possibilities for further learning and choosing their own path in life.
                    </p>
                    <div className='sc_area'>
                        <div className='sc_logo'><FaFacebookF /></div>
                        <div className='sc_logo'><FaInstagram /></div>
                        <div className='sc_logo'><FaYoutube /></div>
                        <div className='sc_logo'><FaTelegram /></div>
                    </div>
                </div>
                <div className="footerLinks">
                    <div className='footerHead'>
                        <h2>Our Links</h2>
                    </div>
                    <ul className='links_area'>
                        <Link to="/about">About Us</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/contact">Mission</Link>
                        <Link to="/scholarship">Scholarship</Link>
                    </ul>
                </div>
                <div className="footerCourses">
                    <div className='footerHead'>
                        <h2>Courses</h2>
                    </div>
                    <ul className='links_area'>
                        <Link to="/schools">Foundation Studies</Link>
                        <Link to="/schools">Undergraduate</Link>
                        <Link to="/schools">Postgraduate</Link>
                    </ul>
                </div>
                <div className="footerContact">
                    <div className='footerHead'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='contact_means'>
                        <div className='contact_widget'>
                            <div className='sc_logo'><BsTelephone /></div>
                            <div>
                                <p>+998 99 086 90 00</p>
                                <p>+998 99 087 90 00</p>
                            </div>
                        </div>
                        <div className='contact_widget'>
                            <div className='sc_logo'><LuMail /></div>
                            <div>
                                <p>admission@cambridge.uz</p>
                                <p>info@cambridge.uz</p>
                            </div>
                        </div>
                        <div className='contact_widget'>
                            <div className='sc_logo'><GrLocation /></div>
                            <div>
                                <p>3A, Bunyodkor Avenue, 2-Charkh</p>
                                <p>Kamolon MCA, Chilonzor, Tashkent 100043, Uzbekistan</p>
                            </div>
                        </div>
                        <span className='note'>*MCA stands for Mahalla Citizen's Assembly.</span>
                    </div>
                </div>
            </div>
            <p className='copyright'>Copyright ® Millat Umidi University 2024. All rights reserved.</p>
        </Foot>
    )
}
const Foot = styled.div`
min-height: 47vh;
width: 100%;
background-color: #032E3F;
color: white;
position: relative;
bottom: 0px;
padding-top: 3rem;
padding-bottom: 3rem;
.footer_top{
display: grid;
grid-template-columns: 2fr 1fr 1fr 2fr;
gap:1.5rem;
.footerHead{
    margin-bottom: 2rem;
    h2{
    font-size: 24px;   
    position: relative;
        &:after{
            content: "";
            background: #ff7350;
            height: 1px;
            width: 70px;
            position: absolute;
            display: block;
            margin-top: 3px;
        }
    }
}
.footerAbout{ 
p{
    font-family: sans-serif;
    line-height: 25px;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
}
.sc_area{
    display: flex;
    .sc_logo{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: #496874;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;    
    }
}
}

.footerContact{
    .contact_widget{
        display: flex;
        margin-top: 2rem;
        .sc_logo{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: #FF7350;
            display: flex;
            justify-content: center;
            align-items: center;   
            color: white; 
            margin-right: 1rem;
        }
        p{
            font-family: sans-serif;
        }
    }
    .note{
        color: gray;
        font-family: sans-serif;
        font-size: 14px;
    }
}

.links_area{
    display: flex;
    flex-direction: column;
    gap: 15px;
    a{
        text-decoration: none;
        color: white;
        font-family: sans-serif;
    }
} }

.copyright{
    text-align: right;
    margin-top: 2rem;
    margin-right: 2rem;
    font-family: sans-serif;
}

`   