import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const DoubleInformationBox = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
