import styled from "styled-components";

const Dropdown = styled.aside<{ $isOpen: boolean }>`
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    width: 25vw;
    height: 100vh;
    background: white;
    border-left: 1px solid black;
    box-shadow: -3px -3px 10px rgba(0, 0, 0, .2);
    border-top-left-radius: .3rem;
    transform: ${(props) => props.$isOpen ? '' : 'translateX(100%)'};
    z-index: 10;
    transition: all 1s;
  `;

const UserInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Icon = styled.button`
  border-radius: .4rem;
  transition: all .37s;
  background-color: white;
  text-align: left;
  padding-top: .5rem;
  padding-inline-start: .5rem;
  cursor: pointer;
`;

const Row = styled.span`
  font-weight: 400;
  padding: .7rem;
  display: block;
`;

const Tag = styled.span`  
  padding: .7rem;
  display: block;
  background: green;
  margin: 0 .2rem;
  font-weight: 600;
  color: white;
  border-radius: .4rem;
  text-align: center;
`;

const Section = styled.section`
  font-family: var(--font-lara);

  & > * {
  font-family: var(--font-lara);
  }
`;

const SectionTitle = styled.h4`
  padding: .7rem;
  border-bottom: 2px solid black;
  margin: 0 .2rem;
`;

export {
  Dropdown,
  UserInfo,
  Icon,
  Row,
  Section,
  SectionTitle,
  Tag
}