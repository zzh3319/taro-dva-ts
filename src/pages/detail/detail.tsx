import React, { ReactNode } from 'react';
import Taro, { FC, usePullDownRefresh } from '@tarojs/taro'
import { View, Text, CheckboxGroup, Checkbox } from '@tarojs/components'
import './detail.scss'
import Bill from "./components/bill"
import History from "./components/history"
import { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Dispatch, AnyAction } from 'redux';


interface TestProps {
  dispatch: Dispatch<AnyAction>;
  loading: boolean;
  test: any;
}

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
const Detail = (props) => {
  // const Detail: FC<TestProps> = () => {
    const { products: { imgsList, galleryList, total }, dispatch } = props
    debugger
  const [billActive, setBillActive] = useState(true);

  useEffect(() => {
    if (billActive) {

    }
  }, [billActive]);

  useEffect(() => {
    dispatch({
      type: 'products/delete',
      payload: 1,
    });
  }, []);

  const toggleActive = (active: boolean): void => {
    setBillActive(active);
  };

  const renderContent = () => {
    if (billActive) {
      return (<Bill />)
    } else {
      return (<History />)
    }
  }


  return (
    <View className="wrap">
      <View className="head">
        <Text onClick={() => toggleActive(true)} className={billActive ? 'txt active' : 'txt'}>待缴款</Text>
        <Text onClick={() => toggleActive(false)} className={billActive ? 'txt' : 'txt active'}>缴款记录</Text>
      </View>
      <View className="content">
        {renderContent()}
      </View>
    </View>
  )
}

// const connect1: any = connect;
// export default Detail;
// export default connect(function (state) {
//   return { ...state.counter };
// })(Detail);
export default connect(({ products }) => ({
  products,
}))(Detail)
