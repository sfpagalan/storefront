const initialState = {
    allProducts: [
      {
        id: 1,
        category: 'FIGURINES',
        name: 'Naruto Uzumaki Figurine',
        description: 'Limited edition figurine of Naruto Uzumaki performing Rasengan.',
        price: 29.99,
        inventory: 15
      },
      {
        id: 2,
        category: 'APPAREL',
        name: 'Attack on Titan Jacket',
        description: 'Scout Regiment leather jacket as seen in Attack on Titan.',
        price: 99.99,
        inventory: 10
      },
      {
        id: 3,
        category: 'MANGA',
        name: 'One Piece Manga Set',
        description: 'The latest collection of One Piece, volumes 91-95.',
        price: 45.00,
        inventory: 20
      },
      {
        id: 4,
        category: 'ACCESSORIES',
        name: 'Dragon Ball Z Keychain',
        description: 'Collectible keychain featuring Goku’s four-star dragon ball.',
        price: 9.99,
        inventory: 50
      },
      {
        id: 5,
        category: 'DVDS',
        name: 'My Hero Academia Season 1',
        description: 'Complete first season of My Hero Academia, Blu-ray edition.',
        price: 59.99,
        inventory: 5
      },
    ],
    filteredProducts: [],
    activeCategory: 'ALL',
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_ACTIVE_CATEGORY': {
        const filteredProducts = action.payload === 'ALL'
          ? state.allProducts
          : state.allProducts.filter(product => product.category === action.payload);
  
        return {
          ...state,
          activeCategory: action.payload,
          filteredProducts,
        };
      }
      default:
        return state;
    }
  };
  
  export default productsReducer;