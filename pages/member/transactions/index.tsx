import jwtDecode from 'jwt-decode'
import React from 'react'
import { JWTPayloadTypes, UserTypes } from '../../../api-services/data-types'
import SideBar from '../../../components/organisms/SideBar'
import TransactionContent from '../../../components/organisms/TransactionContent'

function Transactions() {
  return (
    <section className='transactions overflow-auto'>
      <SideBar activeMenu='transactions' />
      <TransactionContent />
    </section>
  )
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
}
export const getServerSideProps = async ({ req }: GetServerSideProps) => {
  const { token } = req.cookies
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii')
  const payload: JWTPayloadTypes = jwtDecode(jwtToken)
  const userFromPayload: UserTypes = payload.player
  return {
    props: {
      user: { userFromPayload },
    },
  }
}
export default Transactions
