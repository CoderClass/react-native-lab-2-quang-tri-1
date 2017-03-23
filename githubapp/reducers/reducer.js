export const reducer = (state = {}, action) => {
  return state;
}

const types = {
  dataHome: 'dataHome'
}

export const actionCreators = {
  storeDataHome (params) {
    return {
      type: types.dataHome,
      payload: params
    }
  }
}
