const initialState = {
  cartItems: [],

};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  };
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                const newCartItems = state.cartItems.map((item, index) => 
                  index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
                
                return { ...state, cartItems: newCartItems };
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                return { ...state, cartItems: [...state.cartItems, newItem] };
            }
        }
        case 'REMOVE_FROM_CART': {
            const newCartItems = state.cartItems.filter((item) => item.id !== action.payload);
            return { ...state, cartItems: newCartItems };
        }
        default:
            return state;
    }
};

export default cartReducer;
