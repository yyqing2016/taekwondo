export default {
  namespace: 'app',
  state: {
    login: false
  },
  reducers: {
    'updateProps' (state, {
      payload: data
    }) {
      return { ...state, ...data};
    }

  },
  effects: {

  }
}