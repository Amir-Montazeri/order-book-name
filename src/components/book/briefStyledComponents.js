import styled from "styled-components"

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
`;

export const ContainerGrid = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
`;

export const ItemGrid = styled.li`
  height: 25px;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  ${props => props.column && `transform: translateY(${props.column * 25}px)`};
  transition: .3s;
`;

export const Text = styled.p`
  transform: ${props => `translateX(${props.right ? '+' : '-'}15px)`};
`;