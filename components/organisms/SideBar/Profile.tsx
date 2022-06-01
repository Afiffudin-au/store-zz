import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { JWTPayloadTypes, UserTypes } from '../../../api-services/data-types'

function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  })
  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const jwtToken = atob(token)
      const payload: JWTPayloadTypes = jwtDecode(jwtToken)
      const userFromPayload: UserTypes = payload.player

      setUser(userFromPayload)
    }
  }, [])
  return (
    <div className='user text-center pb-50 pe-30'>
      <div className='sidebar-image-profile'>
        {user.avatar && (
          <Image
            src={user.avatar}
            alt={user.avatar}
            objectFit='fill'
            width={90}
            height={90}
            className='mb-20 img-profile-picture'
          />
        )}
      </div>

      <h2 className='fw-bold text-xl color-palette-1 m-0'>{user.name}</h2>
      <p className='color-palette-2 m-0'>{user.email}</p>
    </div>
  )
}

export default Profile
