import styled from "styled-components";

const Header = styled.header`
  padding: 2em 4em;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 5rem;
  font-family: var(--font-cursive);
`;

const Icon = styled.button`
  background-color: white;
  padding: .55rem 1.2rem;
  border-radius: .4rem;
  transition: all .37s;

  & > * {
    background-color: transparent;
    background: transparent;
  }

  &:hover {
    background-color: black;
    cursor: pointer;
    transition: all .37s;
  }

  &:hover > * {
    color: #F7F7F7;
    cursor: pointer;
    transition: all .37s;
  }
`;

const NavOptions = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
`;

export {
  Header,
  Icon,
  Nav,
  NavOptions,
  Title
}