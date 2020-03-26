import React from 'react'

import logoIcon from '../../assets/icons/logo.svg'
import boardsIcon from '../../assets/icons/boards.svg'
import searchIcon from '../../assets/icons/search-outline.svg'
import './Header.sass'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo header__logo'>
        <img src={logoIcon} alt='logo' />
      </div>
      <div className='boards-link header__boards'>
        <img src={boardsIcon} alt='boards' className='boards-link__icon' />
        <span className='boards-link__text'>Boards</span>
      </div>
      <div className='search header__search'>
        <input type='text' className='search__input' />
        <img src={searchIcon} className='search__icon' alt='search' />
      </div>
    </header>
  )
}

export default Header
