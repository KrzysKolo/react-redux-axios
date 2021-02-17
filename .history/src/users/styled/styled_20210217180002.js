import styled from 'styled-components';

export const Container = styled.section`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
`;
export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all .2s ease-in-out;
  &:hover{
    border-bottom: 2px solid rgb(63, 81, 181);
    color: rgb(63, 81, 181);
  }
`;
export const UserP = styled.p`
  max-width: 230px;
  width: 100%;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 10px 0 5px 13px;
`;
export const DivIcon = styled.div`
  cursor: pointer;
  width: 30px;
  transform: scale(1);
  transition: all .2s ease-in-out;
  &:hover{
    color: #d60102;
    transform: scale(1.2);
  }
`;