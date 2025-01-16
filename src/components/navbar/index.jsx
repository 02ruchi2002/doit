import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './style.css'

const Navbar = () => {
  return (
    <nav>
      <div className='menu'>
        <MenuIcon />
        <h3 className='app-name'>DoIt</h3>
      </div>

      <div className='nav-actions'>
        <SearchIcon />
        <GridViewIcon />
        <DarkModeIcon />
      </div>
    </nav>
  )
}

export default Navbar