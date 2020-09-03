import React, { ReactNode } from 'react';
import Taro, { FC, getCurrentPages } from '@tarojs/taro'
import { View, Text, CheckboxGroup, Checkbox } from '@tarojs/components'
import './detail.scss'
import Items from "./components/Items"
import { useEffect, useState } from 'react';

const detail = () => {
  const [current, setCurrent] = useState(0);
  const [listData, setListData] = useState([{ name: "aaa", checked: false }, { name: "bbb", checked: false }, { name: "ccc", checked: true }, { name: "dddd", checked: true }, { name: "eeee", checked: true }]);
  const handleToggle = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  const checkboxChange = (e) => {
    console.log(e.detail)
    console.log(listData)
  }
  // useEffect(() => {
  //   console.log("detailuseEffect")
  // }, [])
  return (
    <View className='detail'>
      <View>detail-page</View>
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


export default detail;
