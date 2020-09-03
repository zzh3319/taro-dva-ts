import React, { ReactNode } from 'react';
import Taro, { FC, getCurrentPages } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import Items from "./components/Items"
import { useEffect, useState } from 'react';
import { AtButton } from 'taro-ui'
import { connect } from 'dva';

const Index = () => {
  const [current, setCurrent] = useState(0);
  const handleToggle = () => {
    Taro.navigateTo({
      url: '/pages/detail/detail'
    })
  }
  const getPhoneNumber = (e): void => {
    console.log(e)
  }
  useEffect(() => {
    console.log(333333)
  }, [])
  return (
    <View className='index'>
      <AtButton type="primary" openType="getPhoneNumber" onGetPhoneNumber={getPhoneNumber}>微信绑定手机号登录</AtButton>
      <View>llllllllllllllllll</View>
      <Items onLalalal={handleToggle} >
        <View>666</View>
      </Items>
    </View>
  )
}


// export default Index;

export default connect(({ products }) => ({
  products,
}))(Index)

