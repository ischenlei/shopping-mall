import {ADD_CART, ADD_COUNTER} from "@/store/mutation-types";

export default {
  addCart({state, commit}, payload) {
    let product = state.cartList.find(item => {
      return item.id === payload.id
    })

    if (product) {
      commit(ADD_COUNTER, product)
    } else {
      payload.count = 1
      commit(ADD_CART, payload)
    }
  }
}
