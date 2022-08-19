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
  box-sizing: border-box;
  padding: 25px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  height: 10vh;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(
    110.5deg,
    rgba(248, 196, 249, 0.66) 22.8%,
    rgba(253, 122, 4, 0.15) 64.6%
  );
  font-weight: bold;
  border-radius: 10px;
  margin-top: 20px;
`;
