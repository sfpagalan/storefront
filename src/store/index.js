import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import productReducer from './products';
import categoryReducer from './categories';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
