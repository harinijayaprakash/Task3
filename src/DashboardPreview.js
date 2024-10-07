import React from 'react';
import styled from 'styled-components';


const PreviewWrapper = styled.section`
  padding: 60px 20px;
  
  background-color: ${({ theme }) => theme.background};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #2c3e50;
`;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  flex: 1;
  max-width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-bottom: 15px;
`;

const UserName = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #2c3e50;
`;

const UserEmail = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const StatusSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
`;

const StatusCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  min-width: 280px;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const ProjectStatus = styled.p`
  font-size: 1rem;
  color: #2ecc71;
  font-weight: bold;
`;

const ProjectProgress = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const NotificationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NotificationItem = styled.li`
  font-size: 0.9rem;
  color: #333;
  margin: 5px 0;
`;

const DashboardPreview = () => {
  return (
    <PreviewWrapper>
      <Title>User Dashboard Preview</Title>
      <DashboardContainer>
        <ProfileSection>
          <ProfilePicture src="https://via.placeholder.com/100" alt="User Profile" />
          <UserName>John Doe</UserName>
          <UserEmail>johndoe@example.com</UserEmail>
        </ProfileSection>
        <StatusSection>
          <StatusCard>
            <CardTitle>Project Status</CardTitle>
            <ProjectStatus>In Progress</ProjectStatus>
            <ProjectProgress>75% Completed</ProjectProgress>
          </StatusCard>
          <StatusCard>
            <CardTitle>Notifications</CardTitle>
            <NotificationList>
              <NotificationItem>New message from Sarah.</NotificationItem>
              <NotificationItem>Project deadline approaching.</NotificationItem>
              <NotificationItem>Your profile has been updated.</NotificationItem>
            </NotificationList>
          </StatusCard>
        </StatusSection>
      </DashboardContainer>
    </PreviewWrapper>
  );
};

export default DashboardPreview;
