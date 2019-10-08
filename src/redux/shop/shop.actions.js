import ShopActionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
    payload: collectionsMap,
    type: ShopActionTypes.UPDATE_COLLECTIONS,
});
