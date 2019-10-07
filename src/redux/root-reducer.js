import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// Tell redux-persist to use local storage as default storage.
import storage from 'redux-persist/lib/storage';

// Reducers
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
