import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { Container, ContainerGrid, ItemGrid, Text } from './briefStyledComponents';

export default function Sell() {
  const [selectedColumn, setSelectedColumn] = React.useState(0);

  return (
    <Container>
      <ContainerGrid moveable={true}>
        <ItemGrid color='#D2F7E5' column={selectedColumn}>
          <VscChromeClose color='red' cursor='pointer' onClick={() => setSelectedColumn(selectedColumn + 1)} />
          <Text right>554</Text>
        </ItemGrid>
      </ContainerGrid>
      <ContainerGrid>
        <ItemGrid color='#69EBEC'>1.84</ItemGrid>
        <ItemGrid color='#69EBEC'>1.8</ItemGrid>
        <ItemGrid color='#69EBEC'>1.78</ItemGrid>
        <ItemGrid color='#69EBEC'>1.76</ItemGrid>
        <ItemGrid color='#69EBEC'>1.7</ItemGrid>
      </ContainerGrid>
      <ContainerGrid>
        <ItemGrid color='#EFEFEF'>4234</ItemGrid>
        <ItemGrid color='#EFEFEF'>1239</ItemGrid>
        <ItemGrid color='#EFEFEF'>153</ItemGrid>
        <ItemGrid color='#EFEFEF'>29384</ItemGrid>
        <ItemGrid color='#EFEFEF'>1238</ItemGrid>
      </ContainerGrid>
    </Container>
  )
};