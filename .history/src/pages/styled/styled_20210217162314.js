import styled from 'styled-components';

export const Container = styled.section`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const TitlePage = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-left: 1rem;
`;

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1.5rem;
`;

export const WrapperButton = styled.button`
  width: 30%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(225, 220, 210);
  border-radius: 5px;
  background-color: #fff;
`;

export const ButtonApp = styled.button`
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color};
  color: #fff;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 0;
  margin: .5rem 0;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0 2px 4px ${props => props.color};
  transition: all .3s ease;
  &:hover {
    text-transform: uppercase;
    color: rgb(212, 233, 249);
  }
`;