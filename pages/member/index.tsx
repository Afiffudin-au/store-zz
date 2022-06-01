import React from 'react'
import OverviewContent from '../../components/organisms/OverviewContent'
import SideBar from '../../components/organisms/SideBar'

function Member() {
  return (
    <section className='overview overflow-auto'>
      <SideBar activeMenu='overview' />
      <OverviewContent />
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
  return {
    props: {},
  }
}
export default Member
