import React from 'react'

import './Board.sass'

const Board = ({ board }) => {
  return (
    <div className='board'>
      <div className='board__title'>{board.boardTitle}</div>
      <div className='board__subtitle'>{board.boardSubtitle}</div>
    </div>
  )
}

export default Board
