import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal'; // Import the Modal component

const HeroWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
color: ${({ theme }) => theme.text};
}
  text-align: center;
  padding: 20px;
`;

const Content = styled.div`
  max-width: 600px;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;




const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <HeroWrapper>
      <Content>
        <Title><p>Join Chucklebyte Technologies</p></Title>
        <Subtitle><p>Kickstart your career with our exciting internship opportunities!</p></Subtitle>
        <p><CTAButton onClick={handleModalOpen}>Get in Touch</CTAButton></p>
      </Content>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </HeroWrapper>
  );
};

export default HeroSection;

// ... Styled components remain the same as before

