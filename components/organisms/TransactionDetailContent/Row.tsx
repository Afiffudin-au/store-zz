import React from 'react'
import NumberFormat from 'react-number-format'
interface RowProps {
  label: string
  value: string | number
  className?: string
}
function Row({ label, value, className }: RowProps) {
  return (
    <p className='text-lg color-palette-1 mb-20'>
      {label}
      <span className={`purchase-details ${className}`}>
        {typeof value === 'string' ? (
          value
        ) : (
          <NumberFormat
            value={value}
            prefix='Rp. '
            displayType='text'
            thousandSeparator='.'
            decimalSeparator=','
          />
        )}
      </span>
    </p>
  )
}

export default Row
