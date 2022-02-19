import './global.css';
import React from 'react';
import styled from 'styled-components';
import OrderBook from './pages/OrderBook';

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 1, 1, .7);
`;

export default function App() {
  return (
    <Container>
      <OrderBook />
    </Container>
  )
}