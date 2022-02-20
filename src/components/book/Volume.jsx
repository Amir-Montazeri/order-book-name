import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import styled from 'styled-components';
import { ItemGrid, Text } from './briefStyledComponents';

const VolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${props => `translateX(${props.left ? '+' : '-'}13px)`};
  @media screen and (max-width: 484px) {
    transform: ${props => `translateX(${props.left ? '+' : '-'}4px)`};
  }
`;

export default function Volume({ currentColumn, maxVolume, setColumn, value, setValue, right, left }) {
  const accessChangeColumn = (type) => {
    switch (type) {
      case 'add': {
        if (currentColumn < maxVolume) {
          return true
        }
      }
        break;
      case 'reduce': {
        if (currentColumn > 0) {
          return true
        }
      }
        break;
      default:
        return false;
    };
  };

  return (
    <div>
      <ItemGrid color='#D2F7E5' right={right} column={currentColumn}>
        <VscChromeClose color='red' cursor='pointer' onClick={() => setValue(0)} />
        <VolumeContainer right={right} left={left}>
          <ImArrowUp
            color='#CDEA8B'
            style={{ transition: '.2s' }, !accessChangeColumn('reduce') && { opacity: 0, visibility: 'hidden' }}
            cursor='pointer'
            onClick={() => accessChangeColumn('reduce') && setColumn(currentColumn - 1)}
          />
          <Text onClick={() => console.log('open modal')}>{value || 0}</Text>
          <ImArrowDown
            color='#CDEA8B'
            style={{ transition: '.2s' }, !accessChangeColumn('add') && { opacity: 0, visibility: 'hidden' }}
            cursor='pointer'
            onClick={() => accessChangeColumn('add') && setColumn(currentColumn + 1)}
          />
        </VolumeContainer>
      </ItemGrid>
    </div>
  );
};