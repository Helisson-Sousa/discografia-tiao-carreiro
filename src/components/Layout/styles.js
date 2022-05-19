import styled from "styled-components";

export const Layout = styled.div`
  background-image: url(assets/images/background.png);
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 15px;
  padding-bottom: 70px;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 80%;
  height: 100%;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
`;
