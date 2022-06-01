export interface CategoryTypes {
  _id: string
  name: string
  __v: number
}
export interface GameItemTypes {
  _id: string
  name: string
  thumbnail: string
  category: CategoryTypes
}
export interface BanksTypes {
  _id: string
  name: string
  noRekening: string
  bankName: string
}
export interface PaymentTypes {
  _id: string
  type: string
  status: string
  //for array of objet [{}]
  banks: BanksTypes[]
}
export interface NominalTypes {
  _id: string
  coinQuantity: number
  coinName: string
  price: number
}
export interface LoginTypes {
  email: string
  password: string
}
export interface UserTypes {
  avatar: string | File | Blob |any
  email: string
  id: string
  phoneNumber: string
  username: string
  name: string
}
export interface JWTPayloadTypes {
  player: UserTypes
  iat: number
}
export interface CheckoutTypes {
  voucher: string
  nominal: string
  payment: string
  bank: string
  name: string
  accountUser: string
}
export interface historyVoucherTopupTypes {
  category: string
  coinName: string
  coinQuantity: string
  gameName: string
  price: number
  thumbnail: string
}
export interface HistoryPaymentTypes {
  bankName: string
  name: string
  noRekening: string
  type: string
}
export interface HistoryTransactionTypes {
  _id: string
  historyVoucherTopup: historyVoucherTopupTypes
  value: number
  status: string
  accountUser: string
  tax: number
  name: string
  historyPayment : HistoryPaymentTypes
}
export interface TopUpCategoriesTypes {
  value: number
  _id: string
  name: string
}
