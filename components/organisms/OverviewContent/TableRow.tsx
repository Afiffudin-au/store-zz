import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import NumberFormat from 'react-number-format'
interface TableRowProps {
  image: string
  title: string
  category: string
  item: number | string
  price: number
  status: string
}
function TableRow({
  title,
  category,
  item,
  price,
  status,
  image,
}: TableRowProps) {
  const statusClass = classNames({
    'float-start icon-status': true,
    pending: status === 'pending',
    success: status === 'success',
    failed: status === 'failed',
  })
  return (
    <tr className='align-middle'>
      <th scope='row' className='overview-item-game'>
        <Image
          objectFit='cover'
          className='me-3 mb-lg-0 mb-3 overview-item-img'
          src={image}
          width={80}
          height={60}
          quality={100}
          alt='game thumbnail'
        />
        <div className='game-title-header'>
          <p className='game-title fw-medium text-start color-palette-1 m-0'>
            {title}
          </p>
          <p className='text-xs fw-normal text-start color-palette-2 m-0'>
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className='fw-medium color-palette-1 m-0'>{item}</p>
      </td>
      <td>
        <p className='fw-medium text-start color-palette-1 m-0'>
          <NumberFormat
            value={price}
            prefix='Rp. '
            displayType='text'
            thousandSeparator='.'
            decimalSeparator=','
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className='fw-medium text-start color-palette-1 m-0 position-relative'>
            {status}
          </p>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
