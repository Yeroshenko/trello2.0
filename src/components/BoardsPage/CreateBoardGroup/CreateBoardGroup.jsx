import React, { useState } from 'react'

import './CreateBoardGroup.sass'

const CreateBoardGroup = ({ setNewBoardGroup }) => {
  const [createMode, setCreateMode] = useState(false)
  const [groupName, setGroupName] = useState('')

  const enableCreateMode = () => setCreateMode(true)
  const disableCreateMode = () => {
    if (groupName.length) setNewBoardGroup(groupName)
    setCreateMode(false)
    setGroupName('')
  }

  const onGroupNameChange = e => setGroupName(e.target.value)

  return (
    <div className='create-board-group'>
      {!createMode && (
        <div className='create-board-group__text' onClick={enableCreateMode}>
          Создать новую групу
        </div>
      )}
      {createMode && (
        <input
          className='create-board-group__input'
          value={groupName}
          autoFocus
          onChange={onGroupNameChange}
          onBlur={disableCreateMode}
        />
      )}
    </div>
  )
}

export default CreateBoardGroup
