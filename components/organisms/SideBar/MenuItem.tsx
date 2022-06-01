import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface MenuItemProps {
  title: string
  active: boolean
  icon:
    | 'ic-menu-overview'
    | 'ic-menu-transaction'
    | 'ic-menu-card'
    | 'ic-menu-logout'
    | 'ic-menu-messages'
    | 'ic-menu-reward'
    | 'ic-menu-setting'
  href: string
  onClick?: () => void
}
function MenuItem({
  title,
  icon,
  active,
  href = '/',
  onClick,
}: Partial<MenuItemProps>) {
  const classItem = classNames({
    item: true,
    'mb-30': true,
    active: active,
  })
  return (
    <div className={classItem} onClick={onClick}>
      <div className='me-3'>
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt='icon-menu-overview'
        />
      </div>
      <p className='item-title m-0'>
        {onClick ? (
          <a className='text-lg text-decoration-none'>{title}</a>
        ) : (
          <Link href={href}>
            <a className='text-lg text-decoration-none'>{title}</a>
          </Link>
        )}
      </p>
    </div>
  )
}

export default MenuItem
