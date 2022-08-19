import React, { useState } from "react";
import Grid from "../Grid";
import GridItem from "../GridItem";
import * as C from "./styles";

function Header() {
  const [itemToDo, setItemToDo] = useState("");
  const [MultipleItemTodo, setMultipleItemTodo] = useState([]);

  const handleButtonClick = () => {
    console.log(itemToDo);

    setMultipleItemTodo((prevState) => [...prevState, itemToDo]);
  };

  return (
    <>
      <C.Container>
        <C.Label>Lista de Objetivos</C.Label>
        <C.Input
          type="text"
          placeholder="Digite a tarefa"
          onChange={(e) => setItemToDo(e.target.value)}
        ></C.Input>
        <C.Button type="button" onClick={handleButtonClick}>
          Adicionar
        </C.Button>

        <Grid></Grid>
        {MultipleItemTodo.map((itemValue) => (
          <GridItem key={itemValue} item={itemValue} />
        ))}
      </C.Container>
    </>
  );
}

export default Header;
