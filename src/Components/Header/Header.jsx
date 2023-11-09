import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header({ storeName }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const cart = useSelector((state) => state.cart);
  
  const cartItems = cart && Array.isArray(cart.cart) ? cart.cart : [];

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
    setCartOpen(!cartOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCartOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {storeName}
        </Typography>
        <IconButton color="inherit" aria-label="cart" onClick={handleCartClick}>
          <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {cartItems.length === 0 ? (
            <MenuItem onClick={handleClose}>Your cart is empty</MenuItem>
          ) : (
            cartItems.map((item) => (
              <MenuItem onClick={handleClose} key={item.id}>
                {item.name} - Qty: {item.quantity}
              </MenuItem>
            ))
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
