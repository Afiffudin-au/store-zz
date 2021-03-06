import classNames from 'classnames'
import React from 'react'
interface ButtonTabProps {
  title: string
  active: boolean
  onClick: () => void
}
function ButtonTab({ active, title, onClick }: ButtonTabProps) {
  const btnClass = classNames({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  })
  return (
    <button type='button' onClick={onClick} className={btnClass}>
      {title}
    </button>
  )
}

export default ButtonTab
