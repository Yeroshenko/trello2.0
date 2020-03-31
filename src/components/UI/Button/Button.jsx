import React from 'react'
import cn from 'classnames'

import './Button.sass'

const Button = ({ children, type }) => {
  return <button className={cn('button', type)}>{children}</button>
}

export default Button
