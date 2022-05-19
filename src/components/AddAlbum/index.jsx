import * as Styled from "./styles";
import { useState } from "react";
import P from "prop-types";
import Button from "../Button";
import Input from "../Input";

const AddAlbum = ({ onCancel, onSave }) => {
  const [name, setname] = useState("");
  const [year, setyear] = useState("");

  return (
    <Styled.Modal>
      <Styled.BodyOne>
        <Styled.Title>Novo Albúm</Styled.Title>
        <Styled.Form>
          <Styled.Fieldset>
            <Input
              placeholder="Nome"
              type={"text"}
              name={"name"}
              onChange={(event) => setname(event.target.value)}
            ></Input>
          </Styled.Fieldset>
          <Styled.Fieldset>
            <Input
              type={"number"}
              placeholder="Year"
              year={"year"}
              onChange={(event) => setyear(event.target.value)}
            ></Input>
          </Styled.Fieldset>
          <Styled.ButtonContent>
            <Button onClick={onCancel}>Cancelar</Button>
            <Button primary onClick={() => onSave(name, year)}>
              Salvar
            </Button>
          </Styled.ButtonContent>
        </Styled.Form>
      </Styled.BodyOne>
      <Styled.BodyTwo></Styled.BodyTwo>
      <Styled.Arm>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
        <Styled.GuitarFret></Styled.GuitarFret>
      </Styled.Arm>
      <Styled.Hand>
        <Styled.HandLine>
          <Styled.HandItem>
            <Styled.TunerOne></Styled.TunerOne>
          </Styled.HandItem>
          <Styled.HandItem>
            <Styled.TunerOne></Styled.TunerOne>
          </Styled.HandItem>
          <Styled.HandItem>
            <Styled.TunerOne></Styled.TunerOne>
          </Styled.HandItem>
        </Styled.HandLine>
        <Styled.HandLine>
          <Styled.HandItem>
            <Styled.TunerTwo></Styled.TunerTwo>
          </Styled.HandItem>
          <Styled.HandItem>
            <Styled.TunerTwo></Styled.TunerTwo>
          </Styled.HandItem>
          <Styled.HandItem>
            <Styled.TunerTwo></Styled.TunerTwo>
          </Styled.HandItem>
        </Styled.HandLine>
      </Styled.Hand>
    </Styled.Modal>
  );
};

export default AddAlbum;

AddAlbum.propTypes = {
  onCancel: P.func,
  onSave: P.func,
};
