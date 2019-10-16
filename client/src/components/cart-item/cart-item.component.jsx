import React from 'react';

// Styles
import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
} from  './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{ name }</span>
            <span>{ quantity } x ${ price }</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);
