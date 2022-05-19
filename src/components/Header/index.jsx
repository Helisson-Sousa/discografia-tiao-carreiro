import * as Styled from "./styles";

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo href={"/"}>
        <img src="assets/images/logo.png" alt="logo" />
      </Styled.Logo>
      <Styled.Title>Discografia</Styled.Title>
    </Styled.Header>
  );
};

export default Header;
