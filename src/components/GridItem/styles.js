import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin: 10px;
  padding: 15px;
  background: #fff;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: flex;
    height: 10vh;
    box-sizing: border-box;
    padding: 15px;
    width: 100%;
    text-size-adjust: 60%;

    Input {
      width: 30px;
      margin: 15px;
    }

    Label {
      word-break: break-word;
      size: 50%;
    }
  }
`;

export const Input = styled.input`
  height: 5vh;
  width: 3%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
`;

export const Svg = styled.h3``;
