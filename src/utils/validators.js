export const required = value => {
  if (!value) return 'Не соизволите ли вы ввести нужные данные'
  return undefined
}

export const maxLength = max => value => {
  if (value.length > max) return `Максимум ${max} символов` 
  return undefined
}
