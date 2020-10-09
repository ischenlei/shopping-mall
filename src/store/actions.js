import {ADD_CART, ADD_COUNTER} from "@/store/mutation-types";

export default {
  addCart({state, commit}, payload) {
    return new Promise(((resolve, reject) => {
      let product = state.cartList.find(item => {
        return item.id === payload.id
      })

      if (product) {
        commit(ADD_COUNTER, product)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        commit(ADD_CART, payload)
        resolve('添加新的商品')
      }
    }))
  }

}
