import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useDispatch} from 'react-redux';

function Categories() {
  const dispatch = useDispatch();

  const handleClick  = (category) => {
    let action = {
      type: 'CHANGE_ACTIVE_CATEGORY',
      payload: category,
    }
    dispatch(action);
    console.log({action});
  };

  const categories = [
    { 
        name: 'ALL', 
        displayName: 'All Items' 
    },
    { 
        name: 'FIGURINES', 
        displayName: 'Figurines', 
        description: 'Exclusive anime figurines.' 
    },
    { 
        name: 'APPAREL', 
        displayName: 'Apparel', 
        description: 'Anime themed clothing' 
    },
    { 
        name: 'MANGA', 
        displayName: 'Manga', 
        description: 'Latest and classic manga.' 
    },
    { 
        name: 'ACCESSORIES', 
        displayName: 'Accessories', 
        description: 'Anime accessories to flaunt.' 
    },
    { 
        name: 'DVDs', 
        displayName: 'DVDs', 
        description: 'Anime movies and series in DVD format.' 
    },
  ];

  return (
    <div className="categories">
      <h2>Browse Anime Merchandise</h2>
      <Stack direction="row" spacing={2}>
        {categories.map((category, idx) => (
          <Button key={idx} variant="contained" color="primary" onClick={() => handleClick(category.name)}>
            {category.displayName}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default Categories;