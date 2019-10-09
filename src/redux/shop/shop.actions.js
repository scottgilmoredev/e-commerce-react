import ShopActionTypes from './shop.types';

export const fetchCollectionsFailure = errorMessage => ({
    payload: errorMessage,
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
});

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    payload: collectionsMap,
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
});
