import React from "react";
import { AiFillDelete } from "react-icons/ai";

import * as C from "./styles";

// import { Container } from './styles';

function GridItem(props) {
  return (
    <>
      <C.Container>
        <C.Input type="checkbox" />
        <C.Label>{props.item}</C.Label>
        <C.Svg>
          <AiFillDelete />
        </C.Svg>
      </C.Container>
    </>
  );
}

export default GridItem;
