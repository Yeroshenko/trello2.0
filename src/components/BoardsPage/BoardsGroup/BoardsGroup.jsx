import React, { useState } from 'react'

import BoardContainer from '../Board/BoardContainer'
import CreateBoardContainer from '../CreateBoard/CreateBoardContainer'
import editIcon from '../../../assets/icons/edit.svg'
import removeIcon from '../../../assets/icons/cross_black.svg'
import './BoardsGroup.sass'

const BoardsGroup = ({ boardsGroup, boardsGroupId, remove, edit }) => {
  const boardsItem =
    boardsGroup.boards &&
    Object.keys(boardsGroup.boards).map(boardId => {
      return (
        <div className='board-wrapper' key={boardId}>
          <BoardContainer boardId={boardId} groupId={boardsGroupId} />
        </div>
      )
    })

  const [createMode, setCreateMode] = useState(false)
  const [groupName, setGroupName] = useState(boardsGroup.title)

  const enableCreateMode = () => setCreateMode(true)
  const disableCreateMode = () => {
    if (groupName.length) edit(boardsGroupId, groupName)

    setCreateMode(false)
  }

  const onGroupNameChange = e => setGroupName(e.target.value)
  const removeGroupHeader = () => remove(boardsGroupId)

  return (
    <div className='boards-group'>
      <div className='boards-group__title'>
        {!createMode && (
          <div className='boards-group__title-text'>{boardsGroup.title}</div>
        )}
        {createMode && (
          <input
            className='boards-group__title-input'
            value={groupName}
            autoFocus
            onChange={onGroupNameChange}
            onBlur={disableCreateMode}
          />
        )}
        <div className='boards-group__title-icons'>
          <div className='boards-group__title-icon' onClick={enableCreateMode}>
            <img src={editIcon} alt='edit' />
          </div>
          <div className='boards-group__title-icon' onClick={removeGroupHeader}>
            <img src={removeIcon} alt='remove' />
          </div>
        </div>
      </div>
      <div className='boards'>
        {boardsItem}
        <CreateBoardContainer boardsGroupId={boardsGroupId} />
      </div>
    </div>
  )
}

export default BoardsGroup
