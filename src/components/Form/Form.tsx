import React, { ReactNode } from "react";
import styled from "styled-components";

export const FormWrapper = styled.main`
  background-color: #e2be8b63;
  height: 100dvh;
  width: 100dvw;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: #F7F7F7;
  height: 55%;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
`;

const ContentWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

const Header = styled.header`
  margin-top: 4rem;
  text-align: center;
  font-size: 2.5rem;
`;

type FormLogin = {
  name: string;
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormLogin = ({ name, children, onSubmit }: FormLogin) => {
  return (
    <Form onSubmit={onSubmit}>
      <Header>{name}</Header>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Form>
  )
}