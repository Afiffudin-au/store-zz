import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: '',
    name: '',
    category: {
      name: '',
    },
  })
  useEffect(() => {
    const dataFromLocal = localStorage.getItem('data-item')
    const dataItemLocal = JSON.parse(dataFromLocal)
    setDataItem(dataItemLocal)
  }, [])
  return (
    <div className='game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30'>
      <div className='pe-4'>
        <div className='cropped'>
          {dataItem.thumbnail && (
            <Image
              src={dataItem?.thumbnail || ''}
              className='img-fluid'
              alt={dataItem?.thumbnail}
              width={200}
              height={200}
              objectFit='fill'
            />
          )}
        </div>
      </div>
      <div>
        <p className='fw-bold text-xl color-palette-1 mb-10'>{dataItem.name}</p>
        <p className='color-palette-2 m-0'>{dataItem.category.name}</p>
      </div>
    </div>
  )
}

export default CheckoutItem
