import React from 'react'
import { reduxForm } from 'redux-form'

import { createField, Button, Input, Textarea } from '../../../UI'
import crossIcon from '../../../../assets/icons/cross.svg'
import './CreateBoardForm.sass'

const CreateBoardForm = ({ handleSubmit, disableCreateMode, isFetching }) => {
  return (
    <div className='create-board-form__overlay'>
      <form className='create-board-form' onSubmit={handleSubmit}>
        <div className='create-board-form__input'>
          {createField(Input, 'boardTitle', null, 'Введите заголовок', null, {autoFocus: true})}
        </div>

        <div className='create-board-form__textarea'>
          {createField(Textarea, 'boardDescription', null, 'Введите описание', null, {
            rows: 5
          })}
        </div>
        <div className='create-board-form__footer'>
          <div className='create-board-form__btn'>
            <Button type='success'>{!isFetching ? "Создать" : 'Создание...' }</Button>
          </div>
          <div className='create-board-form__close' onClick={disableCreateMode}>
            <img src={crossIcon} alt='close' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({ form: 'createBoard' })(CreateBoardForm)
