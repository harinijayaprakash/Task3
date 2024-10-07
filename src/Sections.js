import React from 'react';
import { Button } from './Common';
import styled from 'styled-components';


// Services Section to highlight key services
export const ServicesSection = () => (
  <SectionWrapper>
    <h2>Our Services</h2>
    <ServicesGrid>
      <ServiceCard>
        <h3>Web Development</h3>
        <p>We build stunning and responsive websites that help businesses grow.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>Mobile Apps</h3>
        <p>Our mobile app solutions are designed to be both intuitive and powerful.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>Cloud Solutions</h3>
        <p>Leverage our cloud expertise to ensure scalable and secure systems.</p>
      </ServiceCard>
    </ServicesGrid>
  </SectionWrapper>
);

// Team Section to showcase the leadership team
export const TeamSection = () => (
  <SectionWrapper>
    <h2>Meet the Team</h2>
    <TeamGrid>
      <TeamMember>
        <img src="/images/team1.jpg" alt="CEO" />
        <h4>John Doe</h4>
        <p>CEO</p>
      </TeamMember>
      <TeamMember>
        <img src="/images/team2.jpg" alt="CTO" />
        <h4>Jane Smith</h4>
        <p>CTO</p>
      </TeamMember>
      <TeamMember>
        <img src="/images/team3.jpg" alt="CMO" />
        <h4>Tom Johnson</h4>
        <p>CMO</p>
      </TeamMember>
    </TeamGrid>
  </SectionWrapper>
);

// Testimonials Section
export const TestimonialsSection = () => (
  <SectionWrapper>
    <h2>What Our Clients Say</h2>
    <TestimonialsGrid>
      <Testimonial>
        <p>"Chucklebyte transformed our business with an exceptional web solution. Highly recommend!"</p>
        <h4>- Alice K.</h4>
      </Testimonial>
      <Testimonial>
        <p>"Their expertise in cloud solutions helped us scale effortlessly."</p>
        <h4>- Michael B.</h4>
      </Testimonial>
      <Testimonial>
        <p>"The team was a pleasure to work with. They delivered on time and beyond expectations!"</p>
        <h4>- Sarah L.</h4>
      </Testimonial>
    </TestimonialsGrid>
  </SectionWrapper>
);



// Footer Section
export const Footer = () => (
  <FooterWrapper>
    <p>&copy; 2024 Chucklebyte Technologies. All rights reserved.</p>
    <nav>
      <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
    </nav>
  </FooterWrapper>
);

// Styled components for layout


// Services Section styling
const SectionWrapper = styled.section`
  padding: 80px;
  background-color: ${({ theme }) => theme.background};
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const ServiceCard = styled.div`
  width: 30%;
  padding: 20px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
  p {
    margin-top: 10px;
    color: ${({ theme }) => theme.text};
  }
`;

// Team Section styling
const TeamGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  h4 {
    margin-top: 10px;
    font-size: 1.2rem;
  }
  p {
    margin-top: 5px;
    color: ${({ theme }) => theme.text};
  }
`;

// Testimonials Section styling
const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const Testimonial = styled.div`
  width: 30%;
  padding: 20px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  p {
    font-style: italic;
    color: ${({ theme }) => theme.text};
  }
  h4 {
    margin-top: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }
`;

// Footer styling
const FooterWrapper = styled.footer`
  padding: 40px;
  background-color: ${({ theme }) => theme.footerBackground};
  text-align: center;
  p {
    color: ${({ theme }) => theme.text};
  }
  nav a {
    margin: 0 10px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;
