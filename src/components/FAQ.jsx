import React from 'react';
import { styled } from 'styled-components';
import { Input, Collapse } from 'antd';
const { TextArea } = Input;
import MButton from "./MButton.jsx";

export default function FAQ() {
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
        <FaqWrapper className='layer'>
            <div className='faq_area'>
                <h1>Frequently asked questions</h1>
                <Collapse items={items} defaultActiveKey={['1']} size="large" />
            </div>
            <div className='contact_area'>
                <h1>Make A Contact</h1>
                <div className='contacts'>
                    <Input size="large" placeholder="First Name" />
                    <Input size="large" placeholder="Email" />
                    <Input size="large" placeholder="Phone No." />
                    <TextArea
                        placeholder="Write comments"
                        autoSize={{
                            minRows: 10,
                            maxRows: 10,
                        }}
                    />
                    <MButton>Make a request</MButton>
                </div>
            </div>
        </FaqWrapper>
    )
}

const FaqWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: 2fr 1.3fr;
gap: 3rem;
padding-top: 3rem;
padding-bottom: 3rem;

.faq_area{
h1{
    font-size: 40px;
    margin-bottom: 2rem;
}
}
.contact_area{
    background: #032E3F;
    border-radius: 10px;
    padding: 5rem 3rem;
    h1{
        color: white;
        margin-bottom: 2rem;
    }
    .contacts{
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        .comment{
            height: 10rem;
        }
        input{
            height: 3.5rem;
        }
    }
}   
`
