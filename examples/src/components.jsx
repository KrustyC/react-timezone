import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Subcontainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 26px;
`;

export const Subtitle = styled.h5`
  font-size: 16px;
`;

export const P = styled.p`
  font-size: 14px;
  text-align: center;
`;

export const A = styled.a`
  text-decoration: none;
  color: #04A6D6;
  :hover {
    color: #0686AD;
  }
`;

export const Spacer = styled.hr`
  margin: 30px;
  background-color: #DDDBDB;
  border: 0px;
  width: 50%;
  height: 3px;
`;
