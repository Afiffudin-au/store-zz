import React from 'react'
import { HistoryTransactionTypes } from '../../../api-services/data-types'
import { getTransactionDetail } from '../../../api-services/member'
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent'
interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes
}
function TransactionDetail({ transactionDetail }: TransactionDetailProps) {
  return (
    <section className='transactions-detail overflow-auto'>
      <TransactionDetailContent data={transactionDetail} />
    </section>
  )
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
  params: {
    idDetail: string
  }
}
export const getServerSideProps = async ({
  req,
  params,
}: GetServerSideProps) => {
  const { idDetail } = params
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
  const response = await getTransactionDetail(idDetail, jwtToken)
  return {
    props: {
      transactionDetail: response.data,
    },
  }
}
export default TransactionDetail
