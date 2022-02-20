import styled from "styled-components"

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 484px) {
    padding: 0;
  }
`;

export const ContainerColumn = styled.div`
  height: 25px;
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

export const ItemGrid = styled.button`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  background: none;
  ${props => props.column && `transform: translateY(${props.column * 25}px)`};
  transition: .3s;
`;

export const Text = styled.p`
  padding: 3px 0;
  text-align: center;
  cursor: pointer;
`;