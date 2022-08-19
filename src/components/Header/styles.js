import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-content: center;

  @media (max-width: 768px) {
    display: grid;
    place-content: center;
    width: 100%;
  }
`;

export const Label = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  margin: 15px;
  color: white;
`;

export const Input = styled.input`
  height: 6vh;
  margin-top: 30px;
  border-radius: 10px;
  width: 100%;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  height: 10vh;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  background-color: rgb(10, 1, 1, 0.2);
  background-image: linear-gradient(
    83.2deg,
    rgba(200, 173, 253, 1) 10.8%,
    rgba(229, 178, 238, 1) 64.3%
  );
  font-weight: bold;
  border-radius: 10px;
  margin-top: 20px;
`;
