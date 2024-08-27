import styled from "styled-components";


export const FormButton = styled.button`
  font-size: 1.1rem;
  background: black;
  padding: .7rem 1rem;
  color: white;
  border-radius: .3rem;
  font-family: var(--font-lara);
  transition: all .37s;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    transition: all .37s;
  }
`;