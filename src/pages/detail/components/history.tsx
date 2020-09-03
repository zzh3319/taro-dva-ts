import React, { ReactNode } from 'react';
import Taro, { FC, getCurrentPages } from '@tarojs/taro'
import { View, Text, Picker, CheckboxGroup, Checkbox } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { format } from "date-fns";
import './history.scss'
import Items from "./Items"
import { useEffect, useState } from 'react';

const History = () => {
  const [dateSel, setDateSel] = useState(format(new Date(),'yyyy-MM'));
  // const [dateSel, setDateSel] = useState(null);
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
  const onDateChange = (e) => {
    console.log(e.detail)
    debugger
    setDateSel(e.detail.value)
  }
  // useEffect(() => {
  //   console.log("historyuseEffect")
  // }, [])
  return (
    <View className='history'>
      <View>history-page</View>
      <Text>日期选择器</Text>
      <View>
        <Picker mode='date' fields="month" value={dateSel} onChange={onDateChange}>
          <AtList>
            <AtListItem title='请选择日期' extraText={dateSel} />
          </AtList>
        </Picker>
      </View>
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


export default History;
