import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  padding: 5px 2px;
  width: 50%;
  margin: 0 3px;
  font-size: 19px;
  color: #ececec;
  background: ${props => props.bg};
  border: 2px solid gray;
  border-radius: 7px;
`;

export default function Action() {
  return (
    <Container>
      <Button bg='#006766'>PAUSE</Button>
      <Button bg='#660032'>unwatch</Button>
    </Container>
  )
}
