import React from 'react';
import styled from 'styled-components';
import Buy from './Buy';
import Sell from './Sell';

const Container = styled.div`
  margin: 0 10px;
  width: 216px;
  @media screen and (max-width: 484px) {
    margin: 0;
    width: 138px;
  }
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