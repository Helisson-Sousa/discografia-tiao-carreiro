import styled from "styled-components";

export const Content = styled.div`
  padding: 20px 30px;
  height: 100%;
  position: relative;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: #1a73e8;
  font-size: 16px;
  margin-top: 30px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 20px;
  }
`;
