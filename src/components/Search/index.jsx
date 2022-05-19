import * as Styled from "./styles";
import P from "prop-types";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

const Search = ({ onSearch }) => {
  const [keyword, setkeyword] = useState("");

  return (
    <div>
      <Styled.Label>Digite uma palavra chave</Styled.Label>
      <Styled.Search>
        <Input
          type="text"
          onChange={(event) => setkeyword(event.target.value)}
        />
        <Button primary onClick={() => onSearch(keyword)}>
          Procurar
        </Button>
      </Styled.Search>
    </div>
  );
};

export default Search;

Search.propTypes = {
  onSearch: P.func,
};
