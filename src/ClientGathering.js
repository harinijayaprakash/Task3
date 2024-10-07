import React from 'react';
import styled from 'styled-components';


const ClientWrapper = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
  background-color: ${({ theme }) => theme.cardBackground};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #2c3e50;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;
const SuccessWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  margin-bottom: 40px;
`;

const SuccessStory = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  p {
    margin-top: 5px;
    color: ${({ theme }) => theme.primary};
  }
`;



const ClientGathering = () => {
  return (
    <ClientWrapper>
      <SectionTitle>Our Services and Success Stories</SectionTitle>
      
      <ContentWrapper>
       

        <SuccessWrapper>
          <h3>Success Stories</h3>
          <SuccessStory>
            <p><strong>Project A:</strong> Successfully helped a startup grow their e-commerce platform, increasing their sales by 200% in just 6 months.</p>
          </SuccessStory>
          <SuccessStory>
            <p><strong>Project B:</strong> Developed a mobile app for a leading retail company, resulting in 300K downloads in the first 3 months.</p>
          </SuccessStory>
          <SuccessStory>
            <p><strong>Project C:</strong> Integrated cloud solutions for a logistics company, optimizing their operations and reducing costs by 25%.</p>
          </SuccessStory>
        </SuccessWrapper>
      </ContentWrapper>


    </ClientWrapper>
  );
};

export default ClientGathering;
