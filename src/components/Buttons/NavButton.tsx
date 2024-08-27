import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavButton = styled(Link)`
  text-decoration: none;
  color: #F7F7F7;
  background: black;
  border: 1px solid black;
  padding: .7rem 1.2rem;
  border-radius: .4rem;
  font-weight: 500;
  transition: all .37s;
  font-family: var(--font-lara);

  &:hover {
    background: #F7F7F7;
    color: black;
    border: 1px solid black;
    transition: all .37s;
  }
`;