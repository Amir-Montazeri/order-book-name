import React from 'react';
import styled from 'styled-components';
import Buy from './Buy';
import Sell from './Sell';

const Container = styled.div`
  margin: 0 10px;
  width: 216px;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function Book() {
  return (
    <Container>
      <Grid>
        <Sell />
      </Grid>
      <Grid>
        <Buy />
      </Grid>
    </Container>
  )
};