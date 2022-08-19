import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;
    place-content: center;
    width: 100%;
  }
`;
