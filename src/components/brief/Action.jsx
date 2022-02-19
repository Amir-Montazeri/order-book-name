import React from 'react';
import styled from 'styled-components';

const color = {
  pause: {
    bg: '#006766'
  },
  unwatch: {
    bg: '#660032'
  }
}

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
  background: ${props => color[props.scope].bg};
  border: 2px solid gray;
  border-radius: 7px;
`;

export default function Action() {
  return (
    <Container>
      <Button scope='pause'>PAUSE</Button>
      <Button scope='unwatch'>unwatch</Button>
    </Container>
  )
}