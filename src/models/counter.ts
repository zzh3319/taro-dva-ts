// import { getBrandImageCollections, getGalleryCollections } from './api';

const initState = {
  brandCollection: [], // 模特图列表
  brandImageSumTotal: 0, // 模特图总数
  galleryCollection: [], // 商品图列表
  gallerySumTotal: 0, // 商品图总数
  isAuthorized: false
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(() => {
    resolve(ms)
  }, ms));
}

export default {
  namespace: 'counter',
  state: initState,
  effects: {
    async getBrandImageCollections({ payload }, { call, put }) {
      let data = await sleep(1000);


      // const { data } = yield call(getBrandImageCollections, payload);
      /*       data.time = 0;
            const brandImageSumTotal = data.total;
            data.total = data.list.length;
            yield put({
              type: 'saveBrandImageCollections',
              payload: {
                brandCollection: [data],
                brandImageSumTotal
              },
            });
            if (Math.floor(brandImageSumTotal / (payload.pageNum * 10)) === 0) {
              yield put({
                type: 'saveBrandImageCollections',
                payload: {
                  brandCollection: [{ total: 0, list: [] }],
                  brandImageSumTotal
                },
              });
            } */
    },
    * getGalleryCollections({ payload }, { call, put }) {
/*       const { data } = yield call(getGalleryCollections, payload);
      yield put({
        type: 'saveGalleryCollection',
        payload: {
          galleryCollection: data.list || [],
          gallerySumTotal: data.total || 0
        },
      }); */
    },
    * clearCollections({ }, { put }) {
      yield put({
        type: 'saveBrandImageCollections',
        payload: {
          brandImageSumTotal: 0
        }
      });
      yield put({
        type: 'saveGalleryCollection',
        payload: {
          gallerySumTotal: 0
        }
      });
    }
  },

  reducers: {
    saveBrandImageCollections(state, { payload }) {
      return {
        ...state,
        brandCollection: payload.brandImageSumTotal
          ? [...state.brandCollection, ...payload.brandCollection]
          : [],
        brandImageSumTotal: payload.brandImageSumTotal
      };
    },
    saveGalleryCollection(state, { payload }) {
      return {
        ...state,
        galleryCollection: payload.gallerySumTotal ? [...state.galleryCollection, ...payload.galleryCollection] : [],
        gallerySumTotal: payload.gallerySumTotal
      };
    },
  },

};
