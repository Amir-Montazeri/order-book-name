import React from 'react';
import { useRecoilState } from 'recoil';
import { buyAmountState } from './book.atom';
import { Container, ContainerColumn, ItemGrid } from './briefStyledComponents';
import useData from './useData';
import Volume from './Volume';

export default function Buy() {
  const [selectedColumn, setSelectedColumn] = React.useState(0);
  const [amount, setAmount] = useRecoilState(buyAmountState);
  const data = useData('buy');

  return (
    <Container>
      <div>
      {data.map(({ price, size }) => (
          <ContainerColumn>
            <ItemGrid color='#EFEFEF'>{size}</ItemGrid>
            <ItemGrid color='#69EBEC'>{price}</ItemGrid>
          </ContainerColumn>
        ))}
      </div>
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