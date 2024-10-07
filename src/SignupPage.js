import React from 'react';
import styled from 'styled-components';

// Styled-components code
const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #3498db, #2c3e50);
  padding: 20px;
`;

const SignupForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;

  h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 30px;
    text-align: center;
  }

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 5px;
    display: block;
  }

  input {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-top: 5px;
    transition: border-color 0.3s;

    &:focus {
      border-color: #3498db;
      outline: none;
    }
  }
`;

const SignupButton = styled.button`
  width: 100%;
  background-color: #3498db;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

// SignupPage component code
const SignupPage = () => {
  return (
    <SignupWrapper>
      <SignupForm>
        <h2>Create an Account</h2>
        <p>Join Chucklebyte Technologies and be a part of the future!</p>
        <FormGroup>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" required />
        </FormGroup>
        <SignupButton>Create Account</SignupButton>
        <p>Already have an account? <a href="/login">Login here</a>.</p>
      </SignupForm>
    </SignupWrapper>
  );
};

export default SignupPage;
