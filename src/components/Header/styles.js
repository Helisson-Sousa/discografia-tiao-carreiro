import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
  background-color: #fff;
  box-shadow: 0 0 1em #e3e6e6;

  @media (max-width: 768px) {
    padding-right: 10px;
  }
`;

export const Logo = styled.a`
  display: inline-flex;
  padding: 15px 25px;

  @media (max-width: 768px) {
    height: 70px;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  color: #646464;
  font-size: 2.5rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
