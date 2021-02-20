import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 48px;
  width: 100%;
  height: 90px;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);

  background: ${({ theme }): string => theme.mainColor};
`;

export const IconImage = styled.img`
  height: 40px;
  width: 40px;
`;

export const LogoImage = styled.img`
  height: 40px;

  margin-left: 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
