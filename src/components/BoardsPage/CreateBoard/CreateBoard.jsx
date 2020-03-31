import React, { useState } from 'react'

import CreateBoardForm from './CreateBoardForm/CreateBoardForm'
import './CreateBoard.sass'

const CreateBoard = ({ boardsGroupId, createBoard }) => {
  const [createMode, setCreateMode] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  const enableCreateMode = () => setCreateMode(true)
  const disableCreateMode = () => setCreateMode(false)

  const submitForm = data => {
    if (data.boardTitle) {
      setIsFetching(true)
      createBoard(boardsGroupId, { ...data }).then(() => {
        disableCreateMode()
        setIsFetching(false)
      })
    } else {
      disableCreateMode()
    }
  }

  return (
    <div className='create-board'>
      <span className='create-board__title' onClick={enableCreateMode}>
        + Создать новую доску
      </span>
      {createMode && (
        <CreateBoardForm
          onSubmit={submitForm}
          disableCreateMode={disableCreateMode}
          isFetching={isFetching}
        />
      )}
    </div>
  )
}

export default CreateBoard
