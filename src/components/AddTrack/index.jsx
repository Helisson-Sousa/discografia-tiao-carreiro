import * as Styled from "./styles";
import P from "prop-types";
import Modal from "../Modal";
import Input from "../Input";
import { useState } from "react";

const AddTrack = ({ onCancel, onSave, albumId }) => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <Modal
      onSave={() => onSave(title, number, duration)}
      onCancel={onCancel}
      title="Incluir Faixa"
    >
      <Styled.Form>
        <Styled.Fieldset>
          <Input
            placeholder="Título"
            type={"text"}
            name={"title"}
            onChange={(event) => setTitle(event.target.value)}
          ></Input>
        </Styled.Fieldset>
        <Styled.Fieldset>
          <Input
            type={"number"}
            placeholder="Número da Faixa"
            onChange={(event) => setNumber(event.target.value)}
          ></Input>
        </Styled.Fieldset>
        <Styled.Fieldset>
          <Input
            type={"number"}
            placeholder="Duração em segundos"
            onChange={(event) => setDuration(event.target.value)}
          ></Input>
        </Styled.Fieldset>
      </Styled.Form>
    </Modal>
  );
};

export default AddTrack;

AddTrack.propTypes = {
  albumId: P.number,
  onCancel: P.func,
  onSave: P.func,
};
