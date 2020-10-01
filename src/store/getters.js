export default {
  getDetailById: (state) => (id) => {
    return state.detail.find(item => item.id === id)
  },
  cartGoodsNum: (state) => {
    return state.cartList.length
  },
  cartList: (state) => {
    return state.cartList
  }
}
