import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { styled } from 'styled-components';
import { LuQuote } from "react-icons/lu";
import { Avatar } from 'antd';

export default function Testimonial() {
    return (
        <TestimonialWrapper className='layer py-5'>
            <div className='testimonialSign'><LuGraduationCap /> Testimonial</div>
            <h1 className='testimonialHeader'>What Our Students Say</h1>
            <div className='testimonialCardWrapper'>
                <div className="testimonialCard">
                    <LuQuote />
                    <p>
                        Hi. I am Gafurjon Turgunboev, a student of Millat Umidi University. I am going to make real comments about MU University. Before coming to the MU University, I was a winner of subject competition from Economy and I was accepted many universities such as WIUT, MDIS, AJOU and so on. But after coming here, I that I only have general knowledge about business. However after starting the university I can surely see many experienced teachers. At MU University, you can see real students life like UK and USA universities and you never study unnecessary subjects there. Moreover, you will learn from tutors how to think critically, which is very important in present days.
                    </p>
                    <div
                    >
                        <Avatar size={80} src={<img src="https://millatumidi.uz/assets/img/testimonial/avatar2.png" alt="avatar" />} />
                        <h3>Gafurjon Turgunboev</h3>
                    </div>
                </div>
                <div className="testimonialCard">
                    <LuQuote />
                    <p>
                        Hi, everyone my name is Shodiyor Kholiknazarov. Currently I am a freshman student of Millat Umidi University. Before coming to this University, I was accepted to several universities including Westminster, Webster and MDIST. However, I chose the MU University with the advice of my teacher and I am fully satisfied with my choice. I felt the student life of international university, which was dream of mine. Another significant thing that I liked is high qualified, experienced and supportive teachers. They have own teaching system which helped me to change my mind about business. I highly recommend this university to the people who are looking for the high quality education.
                    </p>
                    <div>
                        <Avatar size={80} src={<img src="https://millatumidi.uz/assets/img/testimonial/avatar.png" alt="avatar" />} />
                        <h3>Shodiyor Kholiknazarov</h3>
                    </div>
                </div>
                <div className="testimonialCard">
                    <LuQuote />
                    <p>
                        Hello! My name is Feruzabonu Kodirova, one of the happiest student of Millat Umidi University. From my experience, without any doubt I can say that MU University is a great learning place for an undergraduate to study and learn in order to achieve a degree in the career which they desire. The university has a lot to offer in terms of staff support. There are many facilities available such as one to one meet up sessions and workshops. My lecturers and tutors have also been core to my time in university, helping to shape my learning and knowledge on different topics. MU University also ensures that students are understand the modules and the course program.
                    </p>
                    <div>
                        <Avatar size={80} src={<img src="https://millatumidi.uz/assets/img/testimonial/avatar3.png" alt="avatar" />} />
                        <h3>Feruzabonu Kodirova</h3>
                    </div>
                </div>
            </div>
        </TestimonialWrapper>
    )
}

const TestimonialWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.testimonialSign{
    color: #F76F4D;
    font-size: 18px;
}
.testimonialHeader{
    font-size: 50px;
    margin-bottom: 3rem;
}
.testimonialCardWrapper{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
}
.testimonialCard{
    background: #F0F7FF;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    &:hover{
        background: white;  
        box-shadow: 1px 1.732px 30px rgba(0,0,0,.1000);
    }
    svg{
        font-size: 5rem;
        color: #F13C20;
    }
    p{
        font-family: sans-serif;
        line-height: 25px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
}
`