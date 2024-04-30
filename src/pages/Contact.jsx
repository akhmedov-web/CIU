import React from 'react';
import { styled } from 'styled-components';
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import MButton from '../components/MButton';

export default function Contact() {
  return (
    <ContactWrapper>
      <div className='pages_header'>
        <h1>Contact</h1>
        <div className='pages_navigator'>
          <span className='pages_route'>Home | <span> Contact</span></span>
        </div>
      </div>
      <div className='pages_body'>
        <div className='py-5'>
        <h1 className='text-center'>Contact</h1>
        <div className='contact_card_area layer py-5'>
          <div className='contact_card px-5'>
            <div className='contact_card_icon shadow mt-5 mb-4'><FaPhoneVolume /></div>
            <h4>Phone</h4>
            <h5>+998 71 200 03 06</h5>
          </div>
          <div className='contact_card px-5'>
            <div className='contact_card_icon shadow mt-5 mb-4'><IoIosMailUnread /></div>
            <h4>Email Address</h4>
            <h5>admission@cambridge.uz</h5>
          </div>
          <div className='contact_card px-5' >
            <div className='contact_card_icon shadow mt-5 mb-4'><FaLocationDot /></div>
            <h4>Address</h4>
            <h5 className='text-center'>3A, Bunyodkor Avenue, 2-Charkh Kamolon MCA, Chilonzor, Tashkent 100043, Uzbekistan</h5>
            <p>*MCA stands for Mahalla Citizen's Assembly.</p>
          </div>
        </div>
        </div>
        <div className="map fix" style={{ background: "rgb(245, 245, 245)" }}><div className="container-fluid"><div className="row"><div className="col-lg-12"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.624236054143!2d69.22288847564863!3d41.2952818713117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b23e6bb3cb3%3A0x8e0a4c0bfa73921e!2sCambridge%20International%20University%20(CIU)%20Novza%20Branch!5e0!3m2!1sru!2s!4v1690365281605!5m2!1sru!2s" className='w-100' height="450"></iframe></div></div></div></div>
        <div className='form_area py-5 d-flex flex-column align-items-center'>
          <h1 className='text-center mb-4'>Inquire Form</h1>
          <div className='row layer mb-4'>
            <div className='col-4'>
              <input type="text" className='form-control form-control-lg col-4' placeholder='First Name' />
            </div>
            <div className='col-4'>
              <input type="text" className='form-control form-control-lg col-4' placeholder='Email' />
            </div>
            <div className='col-4'>
              <input type="text" className='form-control form-control-lg col-4' placeholder='Phone No.' />
            </div>
            <div className='col-12 mt-4'>
              <textarea class="form-control col-12" rows="7" placeholder='Write comments'></textarea>
            </div>
          </div>
          <MButton>Make A Request</MButton>
        </div>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
    min-height: 100vh; 
    .contact_card_area{
      display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    }
    .contact_card{
      height: 350px;
      background: #EEF6FE;
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
        font-size: 13px;
      }
    }
    .contact_card:nth-child(2){
      background: #FFF7EF;
    }
    .contact_card_icon{
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #fff;
      font-size: 40px;
    }
    .form_area{
      background: #E7F0F8;
      input, textarea::placeholder{
        font-size: 15px;
        font-family: sans-serif;
      }
    }
`;
