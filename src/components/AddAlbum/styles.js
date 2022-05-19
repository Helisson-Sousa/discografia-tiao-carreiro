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

export const BodyOne = styled.div`
  background-color: #f0f2f5;
  height: 360px;
  width: 300px;
  border-radius: 400px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    background-color: #f0f2f5;
    height: 200px;
    width: 350px;
    border-radius: 0;
    z-index: 3;
    padding-top: 0;
  }
`;

export const BodyTwo = styled.div`
  background-color: #f0f2f5;
  height: 300px;
  width: 280px;
  border-radius: 400px;
  z-index: 2;
  display: flex;
  align-items: center;
  margin-left: -120px;
  justify-content: center;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Arm = styled.div`
  background-color: transparent;
  width: 350px;
  height: 65px;
  margin-left: -80px;
  border-radius: 14px 0px 0px 14px;
  border: 3px solid gray;
  z-index: 3;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const GuitarFret = styled.div`
  height: 60px;
  width: 6px;
  background-color: gray;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Hand = styled.div`
  background-color: transparent;
  height: 80px;
  width: 110px;
  border-radius: 14px;
  border: 3px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const HandLine = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
  flex-direction: row;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const HandItem = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const TunerOne = styled.div`
  background-color: #fff;
  height: 7px;
  width: 10px;
  margin-top: -22px;
  border-radius: 3px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const TunerTwo = styled.div`
  background-color: #fff;
  height: 7px;
  width: 10px;
  margin-top: 24px;
  border-radius: 3px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const ModalDialog = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 25%;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 1280px) {
    width: 90%;
    font-weight: normal;
    margin-bottom: 10px;
    margin-left: 0px;
    font-size: 15px;
    z-index: 5;
  }
`;

export const Form = styled.div`
  margin-top: 35px;
  margin-left: 45px;

  @media (max-width: 1280px) {
    width: 90%;
    font-weight: normal;
    margin-top: 0px;
    margin-left: 0px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin-top: 10px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 1280px) {
    width: 100%
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
