import React from 'react';
import styled from 'styled-components';

const Name = styled.h4`
  padding: 2px 8px;
  color: #fff;
`;

const ContainerTitle = styled(Name)`
  font-size: 21px;
  text-align: center;
`;

export default function Title() {
  return (
    <>
      <Name>order book</Name>
      <ContainerTitle as='h3'>order book name</ContainerTitle>
    </>
  )
};