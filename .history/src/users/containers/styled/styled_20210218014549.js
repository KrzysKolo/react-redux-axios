import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameUser = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-left: 1rem;
  font-family: 'Italianno', cursive;
`;

export const UserImg = styled.img`
  border: 2px solid #151a44;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #3f499e;
  margin: 20px;
`;
export const WrapperInfoDiv = styled.div`
  box-shadow: 0px 5px 10px #e2e2e2;
  margin: 5px;
`;
export const rInfoH2 = styled.h2`
  font-size: 1.3rem;
  padding: 5px;
`;