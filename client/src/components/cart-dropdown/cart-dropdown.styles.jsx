import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartDropdownContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 340px;
  padding: 20px;
  position: absolute;
  right: 40px;
  top: 90px;
  width: 240px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: scroll;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

// Display names
CartDropdownButton.displayName = 'CartDropdownButton';
CartDropdownContainer.displayName = 'CartDropdownContainer';
CartItemsContainer.displayName = 'CartItemsContainer';
EmptyMessageContainer.displayName = 'EmptyMessageContainer';
