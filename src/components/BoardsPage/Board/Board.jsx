import React from 'react'

import arrowIcon from '../../../assets/icons/arrow.svg'
import removeIcon from '../../../assets/icons/remove.svg'
import './Board.sass'

const Board = ({ board, boardId, groupId, removeBoard }) => {
  const removeBoardHandler = () => removeBoard(groupId, boardId)
  return (
    <div className='board'>
      <div className='board__title'>{board.boardTitle}</div>
      <div className='board__description'>{board.boardDescription}</div>
      <div className='board__icons'>
        <img src={removeIcon} onClick={removeBoardHandler} alt='remove' />
        <img src={arrowIcon} alt='open' />
      </div>
    </div>
  )
}

export default Board
