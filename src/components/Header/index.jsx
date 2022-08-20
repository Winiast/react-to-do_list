import React, { useState } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

function Header() {
  const [itemToDo, setItemToDo] = useState("");
  const [MultipleItemTodo, setMultipleItemTodo] = useState([]);

  const handleButtonClick = () => {
    if (!itemToDo.trim()) {
      alert("Este campo não pode ser vazio");
    } else {
      setMultipleItemTodo((prevState) => [...prevState, itemToDo]);
    }
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

        {MultipleItemTodo.map((itemValue) => (
          <GridItem key={itemValue} item={itemValue} />
        ))}
      </C.Container>
    </>
  );
}

export default Header;
