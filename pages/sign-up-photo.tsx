import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { setSignUp } from '../api-services/auth'
import { getGameCategory } from '../api-services/player'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
function SignUpPhoto() {
  const [image, setImage] = useState<any>(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [categories, setCategories] = useState([])
  const [favorite, setFavorite] = useState('')
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  })
  const router = useRouter()
  const getGameCategoryAPI = useCallback(async () => {
    const res = await getGameCategory()
    setCategories(res.data)
    setFavorite(res.data[0]._id)
  }, [])
  useEffect(() => {
    getGameCategoryAPI()
  }, [])
  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form')
    setLocalForm(JSON.parse(getLocalForm))
  }, [])
  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem('user-form')
    const form = JSON.parse(getLocalForm)
    const data = new FormData()
    data.append('image', image)
    data.append('email', form.email)
    data.append('name', form.name)
    data.append('password', form.password)
    data.append('username', form.name)
    data.append('phoneNumber', form.phoneNumber)
    data.append('status', 'Y')
    data.append('favorite', favorite)
    const result = await setSignUp(data)
    if (result.error) {
      toast.error(result.message)
    } else {
      toast.success('Register Berhasil')
      router.push('/sign-up-success')
      localStorage.removeItem('user-form')
    }
  }
  return (
    <section className='sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50'>
      <div className='container mx-auto'>
        <form action=''>
          <div className='form-input d-md-block d-flex flex-column'>
            <div>
              <div className='mb-20'>
                <div className='image-upload text-center'>
                  <label htmlFor='avatar'>
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        width={120}
                        height={120}
                        alt='upload'
                        className='img-upload'
                      />
                    ) : (
                      <Image
                        src='/icon/upload.svg'
                        width={120}
                        height={120}
                        alt='upload'
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
                      return setImage(img)
                    }}
                  />
                </div>
              </div>
              <h2 className='fw-bold text-xl text-center color-palette-1 m-0'>
                {localForm.name}
              </h2>
              <p className='text-lg text-center color-palette-1 m-0'>
                {localForm.email}
              </p>
              <div className='pt-50 pb-50'>
                <label
                  htmlFor='category'
                  className='form-label text-lg fw-medium color-palette-1 mb-10'>
                  Favorite Game
                </label>
                <select
                  id='category'
                  name='category'
                  className='form-select d-block w-100 rounded-pill text-lg'
                  aria-label='Favorite Game'
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}>
                  <option value='' disabled selected>
                    Select Category
                  </option>
                  {categories?.map((category: any) => (
                    <option value={category._id} key={category._id} selected>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='button-group d-flex flex-column mx-auto'>
              <button
                className='btn btn-create fw-medium text-lg text-white rounded-pill mb-16'
                type='button'
                onClick={onSubmit}>
                Create My Account
              </button>
              <a
                className='btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15'
                href='#'
                role='button'>
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SignUpPhoto
