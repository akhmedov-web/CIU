import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import MButton from "./MButton.jsx";

export default function Navbar() {
    return (
        <Nav className='layer'>
            <Link to="/" className='logo'><img to="/" src="https://millatumidi.uz/assets/img/logo/mu-logo.png" alt="logo"/></Link>
            <div className='links'>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About Us</Link>
                <Link to="/schools" className="link">Schools</Link>
                <Link to="/faq" className="link">FAQ</Link>
                <Link to="/contact" className="link">Contact</Link>
                <Link to="/admission" className="link">Admission</Link>
                <Link to="/scholarship" className="link">Scholarship</Link>
                <Link to="https://student.cambridge.uz/dashboard/login" className="link">Hemis</Link>
                <Link to="https://ciu.edupage.org/timetable/" className="link">Timetable</Link>
            </div>
            <Link to="https://admission.millatumidi.uz/"><MButton>Apply Now</MButton></Link>
        </Nav>
    )
}

const Nav=styled.div`
background: white;
display: flex;
justify-content: space-between;
align-items: center;
height: 5.7rem;
width: 100%;
position: fixed;

.logo{
    height: 80%;
    img{
        height: 100%;
    }
}
.links{
    display: flex;
    .link{
        color: #F13C20;
        font-family: "Jost", sans-serif;
        font-weight: 700;
        margin: 0 1rem;
        text-decoration: none;
        transition: all 0.3s ease-in;
        &:hover{
            color:#FF7350;
        }
    }
}
`;