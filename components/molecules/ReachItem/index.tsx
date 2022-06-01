import React from 'react'
import cx from 'classnames'
interface ReachItemProps {
  title: string
  desc: string
  verticalLine?: boolean
  horizontalMargin?: boolean
  horizontalVertical?: boolean
}
function ReachItem({ title, desc, verticalLine = false, horizontalMargin = false, horizontalVertical = false }: ReachItemProps) {
  const customClass = cx({
    'me-lg-35': true,
    'ms-lg-35': horizontalMargin
  })
  return (
    <>
      <div className={customClass}>
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
      </div>
      {
        verticalLine && <><div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div></>
      }
      {
        horizontalVertical && <>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
        </>
      }
    </>
  )
}

export default ReachItem