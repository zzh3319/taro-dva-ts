const initState = {
  imgsList: [1],
  galleryList: [2],
  total: 0
}
export default {
  namespace: 'products',
  state: initState,
  reducers: {
    'delete'(state, { payload: id }) {
      return state.imgsList.filter(item => item.id !== id);
    },
  },
};
