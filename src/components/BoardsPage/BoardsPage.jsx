import React from 'react'

import BoardsGroupContainer from './BoardsGroup/BoardsGroupContainer'
import CreateBoardGroupContainer from './CreateBoardGroup/CreateBoardGroupContainer'
import './BoardsPage.sass'

const BoardsPage = ({ allBoards }) => {
  if (!allBoards) return <div>Loading...</div>

  return (
    <div className='boards-page'>
      {Object.keys(allBoards).map(id => (
        <BoardsGroupContainer key={id} boardsGroupId={id} />
      ))}
      <CreateBoardGroupContainer />
    </div>
  )
}

export default BoardsPage
