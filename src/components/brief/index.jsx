import React from 'react';
import styled from 'styled-components';
import Action from './Action';
import Algorithm from './Algorithm';
import Chart from './Chart';

const Container = styled.div`
  width: 210px;
`;

const TopContent = styled.div`
  margin: auto;
  width: 90%;
`;

export default function Brief() {
  return (
    <Container>
      <TopContent>
        <Algorithm />
        <Action />
      </TopContent>
      <Chart>

      </Chart>
    </Container>
  )
};