import styled from "styled-components";



export const FormButton = styled.button`
  font-size: 1.2rem;
  background: grey;
  padding: .7rem 1rem;
  color: white;
  border-radius: .3rem;
  transition: all .37s;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    transition: all .37s;
  }
`;