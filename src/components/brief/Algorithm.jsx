import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  padding: 5px;
  width: 100%;
  color: #ebebeb;
  background: green;
  font-weight: 100;
  text-align: center;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Text = styled.p`
  margin: 5px 0;
  font-size: 16px;
  font-weight: 900;
  color: #F7CADF;
  text-align: center;
`;

export default function Algorithm() {
  return (
    <div>
      <Title>algorithm</Title>
      <Text>algorithm name that is running</Text>
    </div>
  )
}