import { Person, Search, Menu } from '@mui/icons-material';
import MicoLogo from '../../assets/images/logo.png';
import MenuIcon from '@mui/material/Menu'
import { Button, MenuItem } from '@mui/material';
import { useState } from 'react';
import './navbar.scss';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <nav>
      <img src={MicoLogo} alt="" />
      <div className="nav-left">
        <div className="navbar_container">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#treatment">TREATMENT</a></li>
            <li><a href="#our-doctors">DOCTORS</a></li>
            <li><a href="#testimonial">TESTIMONIAL</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
      </div>
      <div className="menuIcon">
        <Button
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Menu className='menuIconShow' />
        </Button>
        <MenuIcon
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} className='MenuItem'><a href="#" className='link'>HOME</a></MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'><a href="#about" className='link'>ABOUT</a></MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'><a href="#treatment" className='link'>TREATMENT</a></MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'><a href="#our-doctors" className='link'>DOCTORS</a></MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'><a href="#testimonial" className='link'>TESTIMONIAL</a></MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'><a href="#contact" className='link'>CONTACT US</a></MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'> <Person /> LOGIN</MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'><Person /> SIGN UP</MenuItem>
          <MenuItem onClick={handleClose} className='MenuItem'> <Search /> </MenuItem>
        </MenuIcon>
      </div>
      <div className="nav-right">
        <Button className='btn-login'> <Person /> LOGIN </Button>
        <Button className='btn-sign-up'> <Person /> SIGN UP</Button>
        <Button className='btn-search'> <Search /> </Button>
      </div>
    </nav>
  )
}