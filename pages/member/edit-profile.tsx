import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { JWTPayloadTypes, UserTypes } from '../../api-services/data-types'
import { UpdateProfile } from '../../api-services/member'
import Input from '../../components/atoms/Input'
import SideBar from '../../components/organisms/SideBar'
interface UserStateTypes {
  id: string
  name: string
  email: string
  avatar: any
  phoneNumber: string
}
function EditProfile() {
  const [imagePreview, setImagePreview] = useState('/')
  const router = useRouter()
  const [user, setUser] = useState<UserStateTypes>({
    avatar: '',
    email: '',
    phoneNumber: '',
    name: '',
    id: '',
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
  const onSubmit = async () => {
    const data = new FormData()
    data.append('image', user.avatar)
    data.append('name', user.name)
    data.append('phoneNumber', user.phoneNumber)
    const response = await UpdateProfile(data)
    if (response.error) {
      toast.error(response.message)
    } else {
      Cookies.remove('token')
      router.push('/sign-in')
    }
  }
  return (
    <section className='edit-profile overflow-auto'>
      <SideBar activeMenu='settings' />
      <main className='main-wrapper'>
        <div className='ps-lg-0'>
          <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Settings</h2>
          <div className='bg-card pt-30 ps-30 pe-30 pb-30'>
            <form action=''>
              <div className='photo d-flex'>
                <div className='image-upload'>
                  <label htmlFor='avatar'>
                    {imagePreview === '/' ? (
                      user.avatar && (
                        <Image
                          src={user.avatar}
                          alt='icon upload'
                          width={90}
                          height={90}
                          objectFit='fill'
                          className='edit-profile-profile-picture'
                        />
                      )
                    ) : (
                      <Image
                        src={imagePreview}
                        alt='icon upload'
                        width={90}
                        height={90}
                        objectFit='fill'
                        className='edit-profile-profile-picture'
                      />
                    )}
                  </label>
                  <input
                    id='avatar'
                    type='file'
                    name='avatar'
                    accept='image/png, image/jpeg'
                    onChange={(e) => {
                      const img = e.target.files[0]
                      setImagePreview(URL.createObjectURL(img))
                      return setUser({
                        ...user,
                        avatar: img,
                      })
                    }}
                  />
                </div>
              </div>
              <div className='pt-30'>
                <Input
                  label='Full Name'
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className='pt-30'>
                <Input label='Email Address' value={user.email} disabled />
              </div>
              <div className='pt-30'>
                <Input
                  label='Phone'
                  value={user.phoneNumber}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className='button-group d-flex flex-column pt-50'>
                <button
                  type='button'
                  onClick={onSubmit}
                  className='btn btn-save fw-medium text-lg text-white rounded-pill'>
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}

export default EditProfile
