import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'styled-components/native'

const CustomView = styled.View`
   align-items: center;
   justify-content: center;
   width: 150px;
   height: 70px;
   border-radius: 15px;
   padding: 16px; 
`

const CustomText = styled.Text`
   color: #FFFFFF;
   font-size: 30px;
`
type customButtonProps = {
   name: string,
   isActiveState:  boolean,
}

const CustomButton = (props: customButtonProps) => { 
  return (
    <CustomView style ={{
      backgroundColor: props.isActiveState ? '#000080' : '#a9a9a9'
    }}> 
      <CustomText>
        {props.name}
      </CustomText>
    </CustomView>
  )
}

export default CustomButton