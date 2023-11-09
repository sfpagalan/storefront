const initialState = {
  list: [
    { 
      id: 'all', 
      name: 'ALL', 
      displayName: 'All Items' 
    },
    { 
      id: 'figurines', 
      name: 'FIGURINES', 
      displayName: 'Figurines', 
      description: 'Exclusive anime figurines.' 
    },
    { 
      id: 'apparel', 
      name: 'APPAREL', 
      displayName: 'Apparel', 
      description: 'Anime themed clothing.' 
    },
    { 
      id: 'manga', 
      name: 'MANGA', 
      displayName: 'Manga', 
      description: 'Latest and classic manga.' 
    },
    { 
      id: 'accessories', 
      name: 'ACCESSORIES', 
      displayName: 'Accessories', 
      description: 'Anime accessories to flaunt.' 
    },
    { 
      id: 'dvds', 
      name: 'DVDS', 
      displayName: 'DVDs', 
      description: 'Anime movies and series in DVD format.' 
    },
  ],

  activeCategory: { 
    id: 'all', 
    name: 'ALL', 
    displayName: 'All Items' 
  },

}
  
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_ACTIVE_CATEGORY': {
      const category = state.list.find(cat => cat.name === payload);
      return category ? { ...state, activeCategory: category } : state;
    }
    default:
      return state;
  }  
}
  
export default reducer;
  