import React from 'react';
import { useRecoilState } from 'recoil';
import { sellAmountState } from './book.atom';
import { Container, ContainerColumn, ItemGrid } from './briefStyledComponents';
import useData from './useData';
import Volume from './Volume';

export default function Sell() {
  const [selectedColumn, setSelectedColumn] = React.useState(0);
  const [amount, setAmount] = useRecoilState(sellAmountState);
  const data = useData('sell');

  return (
    <Container>
      <Volume
        currentColumn={selectedColumn}
        maxVolume={data.length - 1}
        setColumn={column => setSelectedColumn(column)}
        value={amount[selectedColumn]}
        setValue={value => setAmount({ ...amount, [selectedColumn]: value })}
        left
      />
      <div>
        {data.map(({ price, size, id }) => (
          <ContainerColumn key={id}>
            <ItemGrid color='#69EBEC'>{price}</ItemGrid>
            <ItemGrid color='#EFEFEF'>{size}</ItemGrid>
          </ContainerColumn>
        ))}
      </div>
    </Container>
  );
};