import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import "./Footer.css"
const Footer = () => {

  const Wrapper = styled.div`
  font-size:20px;
  color:white;
  font-family: 'Roboto', sans-serif;
  position: relative;

  .spline{
  position:absolute;
  margin:0;
  top:0;
  right:0
  }
  `;

const Content = styled.div`
  position: absolute;
  top:100px;
  `


  return (
    <Wrapper className='home'>
      <Spline scene="https://prod.spline.design/zYyYhLylmh4LZBrl/scene.splinecode" />
      <Content>
        <h1 className="title">Welcome to Brijesh's Graphics Design</h1>
        <p className="subtitle">I make your ideas come to life with stunning designs.</p>
      </Content>
    </Wrapper>
  )
}

export default Footer


