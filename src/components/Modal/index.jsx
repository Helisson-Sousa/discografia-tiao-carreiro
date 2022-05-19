import * as Styled from "./styles";
import P from "prop-types";
import Button from "../Button";

const Modal = ({ onCancel, onSave, title, children }) => {
  return (
    <Styled.Modal>
      <Styled.ModalDialog>
        <Styled.ModalTitle>{title}</Styled.ModalTitle>
        <Styled.ModalBody>{children}</Styled.ModalBody>
        <Styled.ModalFooter>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button primary onClick={onSave}>
            Salvar
          </Button>
        </Styled.ModalFooter>
      </Styled.ModalDialog>
    </Styled.Modal>
  );
};

export default Modal;

Modal.propTypes = {
  children: P.node,
  title: P.string,
  onCancel: P.func,
  onSave: P.func,
};
