import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#4a90e2" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#4a90e2")};
  font-size: 15px;
  border-radius: 50px;
  border: 2px solid #4a90e2;
  width: 120px;
  padding: 10px 0;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Button;
