import React from 'react'
import { Button } from 'antd';
import styled from "styled-components";

export default function MButton({children}) {
  return (
    <MainButton type="primary" size='large'>{children}</MainButton>
  )
}
const MainButton=styled(Button)`
text-transform: uppercase;
background-color: #F13C20;
box-sizing: border-box;
height: 3rem;
transition: all 0.4s ease-in-out;
&:hover{
    background-color: #134F69 !important;
}
`;