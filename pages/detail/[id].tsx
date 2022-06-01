import React, { useEffect } from 'react'
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
} from '../../api-services/data-types'
import { getDetailVoucher, getFeaturedGame } from '../../api-services/player'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/NavBar'
import TopUpForm from '../../components/organisms/TopUpForm'
import TopUpItem from '../../components/organisms/TopUpItem'
interface DetailProps {
  dataItem: GameItemTypes
  nominals: NominalTypes[]
  payments: PaymentTypes[]
}
function Detail({ dataItem, nominals, payments }: DetailProps) {
  //CLIENT SIDE RENDERING
  // const { query, isReady } = useRouter()
  // const [dataItem, setDataItem] = useState({
  //   name: '',
  //   thumbnail: '',
  //   category: {
  //     name: '',
  //   },
  // })
  // const [nominals, setNominals] = useState([])
  // const [payments, setPayments] = useState([])
  // const getVoucherDetailAPI = useCallback(async (id) => {
  //   const res = await getDetailVoucher(id)
  //   setDataItem(res.data.detail)
  //   localStorage.setItem('data-item', JSON.stringify(res.data.detail))
  //   setNominals(res.data.detail.nominals)
  //   setPayments(res.data.payment)
  // }, [])
  // useEffect(() => {
  //   if (isReady) {
  //     getVoucherDetailAPI(query.id)
  //   }
  // }, [isReady])
  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem))
  }, [])
  return (
    <>
      <Navbar />
      <section className='detail pt-lg-60 pb-50'>
        <div className='container-xxl container-fluid'>
          <div className='detail-header pb-50'>
            <h2 className='text-4xl fw-bold color-palette-1 text-start mb-10'>
              Top Up
            </h2>
            <p className='text-lg color-palette-1 mb-0'>
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className='row'>
            <TopUpItem data={dataItem} type='mobile' />
            <div className='col-xl-9 col-lg-8 col-md-7 ps-md-25'>
              <TopUpItem data={dataItem} type='desktop' />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export const getStaticPaths = async () => {
  const res = await getFeaturedGame()
  const paths = res.data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
interface GetStaticProps {
  params: {
    id: string
  }
}
export const getStaticProps = async ({ params }: GetStaticProps) => {
  const { id } = params
  const data = await getDetailVoucher(id)
  return {
    props: {
      dataItem: data.data.detail,
      nominals: data.data.detail.nominals,
      payments: data.data.payment,
    },
  }
}
export default Detail
