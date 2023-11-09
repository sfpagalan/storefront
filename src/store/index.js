// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import productReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';

// const rootReducer = combineReducers({
//   products: productReducer,
//   categories: categoryReducer,
//   cart: cartReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
  },
});

export default store;
