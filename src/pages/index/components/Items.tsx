import Taro, { FC, PropsWithChildren } from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './Items.scss'
interface ItemsProps {
  children: PropsWithChildren<any>,
  // tabList: Array<string>
  onLalalal?: (...args: any[]) => any
}

const Items: FC<ItemsProps> = ((props) => {
  const handleClick = () => {
    props.onLalalal && props.onLalalal();
  }
  return (
    <View onClick={handleClick} className='Items'>
      <Text>Hello world!</Text>
      {props.children}
    </View>
  )
})
export default Items;

