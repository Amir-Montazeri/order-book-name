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

export const ContainerGrid = styled.ul`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
`;

export const ItemGrid = styled.li`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  ${props => props.column && `transform: translateY(${props.column * 25}px)`};
  transition: .3s;
`;

export const Text = styled.p`
  padding: 3px 0;
  text-align: center;
  cursor: pointer;
`;