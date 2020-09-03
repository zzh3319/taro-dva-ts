import Taro, { FC, PropsWithChildren, previewImage } from '@tarojs/taro';
import React, { Component } from 'react'
import { AtCheckbox } from 'taro-ui'
import { View, Text, Checkbox } from '@tarojs/components'
import { useEffect, useState } from 'react';
import './Items.scss'


// interface dataItem
interface ItemsProps {
  // children: PropsWithChildren<any>,
  value: {
    name: string;
    checked: boolean;
  }
  // onLalalal?: (...args: any[]) => any
}

const Items: FC<ItemsProps> = ((props) => {
  console.log(props)
  const { value } = props;
  const [open, setOpen] = useState(false);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const toggleHandler = () => {
    setOpen((prev) => {
      if (prev) {
        console.log("true")
      }
      return !prev;
    })
  }

  const renderOpenUi = () => {
    return (
      open ? <View onClick={toggleHandler} className='at-icon at-icon-chevron-up'></View>
        : <View onClick={toggleHandler} className='at-icon at-icon-chevron-down'></View>
    )
  };

  const renderDetail = () => {
    return (
      open ? "isopen" : "isClose"
    )
  };

  console.log(checkBoxState)

  return (
    <View>
      <View>
        <Checkbox value={value.name} checked={value.checked} />
        {value.name}
        {/* {value.checked} */}
      </View>
      {renderOpenUi()}
      {renderDetail()}
    </View>

  )
})
export default Items;

