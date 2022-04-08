import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  position: absolute;
  justify-content: center;
  align-content: center;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
  border-radius: 10px;

  span: {
    font-size: 50px;
  }
`;

interface IToggle {
  title: string;
  click: string;
}

function Toggle({ title, click }) {
  return (
    <Button onClick={click}>
      <span>{title}</span>
    </Button>
  );
}

export default Toggle;
