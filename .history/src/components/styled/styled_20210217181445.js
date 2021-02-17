import styled from 'styled-components';

export const HeaderTitle = styled.h1`
    background-color: #3f51b5;
    min-height: 10vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const Navigation = styled.nav`
    background-color: #fff;
    min-height: 6vh;
    width: 900px;
    margin: 1.2rem auto;
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;
export const Li = styled.li`
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  box-shadow: inset 1px 1px 4px ${props => props.color};
   cursor: pointer;
   color: ${props => props.color};
  font-size: 1.3rem;
  margin: 2px 10px;
  padding: 5px 15px;
  transition: all .3s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 4px ${props => props.color};
  }
`;
