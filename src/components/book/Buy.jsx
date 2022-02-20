import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { Container, ContainerGrid, ItemGrid } from './briefStyledComponents';
import Volume from './Volume';

const amountState = atom({
  key: 'buyAmountState',
  default: {0: 120},
});

export default function Buy() {
  const [selectedColumn, setSelectedColumn] = React.useState(0);
  const [amount, setAmount] = useRecoilState(amountState)

  return (
    <Container>
      <ContainerGrid>
        <ItemGrid color='#EFEFEF'>4234</ItemGrid>
        <ItemGrid color='#EFEFEF'>1239</ItemGrid>
        <ItemGrid color='#EFEFEF'>153</ItemGrid>
        <ItemGrid color='#EFEFEF'>29384</ItemGrid>
        <ItemGrid color='#EFEFEF'>1238</ItemGrid>
      </ContainerGrid>
      <ContainerGrid>
        <ItemGrid color='#69EBEC'>1.84</ItemGrid>
        <ItemGrid color='#69EBEC'>1.8</ItemGrid>
        <ItemGrid color='#69EBEC'>1.78</ItemGrid>
        <ItemGrid color='#69EBEC'>1.76</ItemGrid>
        <ItemGrid color='#69EBEC'>1.7</ItemGrid>
      </ContainerGrid>
      <Volume
        currentColumn={selectedColumn}
        maxVolume={4}
        setColumn={column => setSelectedColumn(column)}
        value={amount[selectedColumn]}
        setValue={value => setAmount({...amount, [selectedColumn]: value})}
        right
      />
    </Container>
  );
};