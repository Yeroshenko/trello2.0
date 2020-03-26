import React from 'react'

import Board from './Board/Board'
import './BoardsGroup.sass'

const BoardsGroup = ({ boardsGroup }) => {
  
  const boardsItem = Object.values(boardsGroup.boards).map((board, index) => (
    <div className='board-wrapper' key={index}>
      <Board board={board} />
    </div>
  ))

  return (
    <div className='boards-group'>
      <div className='title'>{boardsGroup.title}</div>
      <div className='boards'>{boardsItem}</div>
    </div>
  )
}

export default BoardsGroup
