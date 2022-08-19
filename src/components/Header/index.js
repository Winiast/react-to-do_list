import React from "react";
import * as C from "./styles";

// import { Container } from './styles';

function Header() {
  return (
    <>
      <C.Container>
        <C.Label>Lista de Objetivos</C.Label>
        <C.Input></C.Input>
        <C.Button>Adicionar</C.Button>
      </C.Container>
    </>
  );
}

export default Header;
