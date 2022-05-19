import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`;

export const ModalDialog = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  min-height: 300px;
  width: 400px;
  z-index: 3;
  padding: 20px;
  width: 25%;

  @media (max-width: 1280px) {
    background-color: #f0f2f5;
    height: 200px;
    width: 350px;
    z-index: 3;
  }
`;

export const ModalTitle = styled.h1`
  font-weight: 500;
  font-size: 25px;

  @media (max-width: 1280px) {
    font-weight: normal;
    margin-bottom: 10px;
    margin-left: 0px;
    font-size: 18px;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  font-size: 20px;
  padding: 10px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
  button {
    width: 100%;
  }
`;
