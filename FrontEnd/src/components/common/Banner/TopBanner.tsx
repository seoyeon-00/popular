import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 280px;
  width: 100%;
`;

const Background = styled.div`
  position: static;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 95%;
    height: 280px;
    background-color: rgb(180, 169, 238);
    background: url('/images/bg_community2.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(30%);
    transform: translateX(-50%);
    z-index: 0;
    border-radius: 10px;
  }
`;

const TextBox = styled.div`
  position: relative;
  padding-top: 80px;

  .text-title {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .text-sub {
    color: #c1c1c1;
    margin-top: 14px;
    font-size: 16px;
  }
`;

interface BannerProps {
  title: string;
  subText: string;
}

const TopBanner = ({ title, subText }: BannerProps) => {
  return (
    <Container>
      <Background>
        <TextBox>
          <p className="text-title">{title}</p>
          <p className="text-sub">{subText}</p>
        </TextBox>
      </Background>
    </Container>
  );
};

export default TopBanner;
