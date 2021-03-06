import React, { useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const router = useRouter()
  const className = {
    label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
  }

  const onSubmit = () => {
    const userForm = {
      name,
      email,
      password,
      phoneNumber,
    }
    localStorage.setItem('user-form', JSON.stringify(userForm))
    router.push('/sign-up-photo')
  }
  return (
    <>
      {' '}
      <h2 className='text-4xl fw-bold color-palette-1 mb-10'>Sign Up</h2>
      <p className='text-lg color-palette-1 m-0'>
        Daftar dan bergabung dengan kami
      </p>
      <div className='pt-50'>
        <label htmlFor='name' className={className.label}>
          Full Name
        </label>
        <input
          autoComplete='off'
          type='text'
          className='form-control rounded-pill text-lg'
          aria-describedby='name'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='pt-30'>
        <label htmlFor='email' className={className.label}>
          Email Address
        </label>
        <input
          autoComplete='off'
          type='email'
          className='form-control rounded-pill text-lg'
          aria-describedby='email'
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='pt-30'>
        <label htmlFor='password' className={className.label}>
          Password
        </label>
        <input
          autoComplete='off'
          type='password'
          className='form-control rounded-pill text-lg'
          aria-describedby='password'
          placeholder='Your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='pt-30'>
        <label htmlFor='password' className={className.label}>
          Phone Number
        </label>
        <input
          autoComplete='off'
          type='text'
          className='form-control rounded-pill text-lg'
          aria-describedby='phoneNumber'
          placeholder='Your phoneNumber'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className='button-group d-flex flex-column mx-auto pt-50'>
        <button
          className='btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16'
          type='button'
          onClick={onSubmit}>
          Continue
        </button>
        <Link href='/sign-in'>
          <a className='btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill'>
            Sign In
          </a>
        </Link>
      </div>
    </>
  )
}

export default SignUpForm
