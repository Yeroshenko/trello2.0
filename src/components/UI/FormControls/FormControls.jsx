import React, { useState } from 'react'
import { Field } from 'redux-form'
import cn from 'classnames'

import './FormControls.sass'

const FormControlCreator = ({ input, label, meta, field, ...props }) => {
  const [inFocuse, setInFocuse] = useState(false)

  const hasInvalid = meta.touched && meta.error

  const onFocus = () => setInFocuse(true)
  const onBlur = () => {
    if (!input.value.length) setInFocuse(false)
  }

  return (
    <div className={cn('form-control', hasInvalid && 'invalid')}>
      <div className={cn('form-control__inner', inFocuse && 'active')}>
        {label && <label className='form-control__label'>{label}</label>}
        {field === 'input' && (
          <input {...input} {...props} onFocus={onFocus} onBlur={onBlur} />
        )}
        {field === 'textarea' && (
          <textarea {...input} {...props} onFocus={onFocus} onBlur={onBlur} />
        )}
      </div>
      {hasInvalid && <span>{meta.error}</span>}
    </div>
  )
}

// exports
export const FormError = ({ errorMessage }) => (
  <div className='form-error'>{errorMessage}</div>
)
export const Input = props => <FormControlCreator {...props} field='input' />
export const Textarea = props => (
  <FormControlCreator {...props} field='textarea' />
)

export const createField = (
  component,
  name,
  label,
  placeholder,
  validators = [],
  props = {}
) => (
  <Field
    component={component}
    name={name}
    label={label}
    placeholder={placeholder}
    validate={validators}
    {...props}
  />
)
