import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Get in Touch</h2>
        <p>Want to learn more about how we can help your business grow? Please fill in your details below, and we'll be in touch shortly.</p>
        <Form>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" required />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </FormField>
          <FormField>
            <Label htmlFor="company">Company</Label>
            <Input type="text" id="company" required />
          </FormField>
          <FormField>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" rows="5" required />
          </FormField>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
