import React from 'react';
import styled from 'styled-components';
import { Brief, Book, Title } from '../components';

const Container = styled.div`
  width: 460px;
  max-width: 95vw;
  border: 2px solid #fff;
`;

const Content = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function OrderBook() {
  return (
    <Container>
      <Title />
      <Content>
        <Brief />
        <Book />
      </Content>
    </Container>
  )
};