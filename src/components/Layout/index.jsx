import * as Styled from "./styles";
import P from "prop-types";

const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Layout>
  );
};

export default Layout;

Layout.propTypes = {
  children: P.node.isRequired,
};
