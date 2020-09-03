import React, { ReactNode } from 'react';
import Taro, { FC, getCurrentPages, usePullDownRefresh } from '@tarojs/taro'
import { View, Text, CheckboxGroup, Checkbox } from '@tarojs/components'
import './bill.scss'
import Items from "./Items"
import { useEffect, useState } from 'react';

const Bill = () => {
  const [current, setCurrent] = useState(0);
  const [listData, setListData] = useState([{ name: "dddd", checked: true }, { name: "eeee", checked: true }]);
  // const handleToggle = () => {
  //   Taro.navigateTo({
  //     url: '/pages/index/index'
  //   })
  // }
  const checkboxChange = (e) => {
    console.log(e.detail)
    console.log(listData)
  }

  usePullDownRefresh(() => {
    // Taro.stopPullDownRefresh()
    setTimeout(()=>{
      console.log('onPullDownRefresh11111111')
      setListData([...listData,{name: "aaaa", checked: true}])
      Taro.stopPullDownRefresh()
    },1000)
  })
  // useEffect(() => {
  //   console.log("billuseEffect")
  // }, [])
  return (
    <View className='bill'>
      <View>bill-page</View>
      <CheckboxGroup onChange={checkboxChange}>
        {
          listData.map((item) => {
            return (<Items key={item.name} value={item} />)
          })
        }
      </CheckboxGroup>

    </View>
  )
}


export default Bill;
