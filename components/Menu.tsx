import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import CustomButton from './CustomButton'
import  styled  from 'styled-components/native'
import React, {useState} from 'react'


const CustomView = styled.View`
   align-items: center;
   justify-content: center;
   width: 150px;
   height: 70px;
   border-radius: 15px;
   background-color: red;
   padding: 16px;
   
`
const CustomText = styled.Text`
   color: #FFFFFF;
   font-size: 30px;
`

const MenuContainer = styled.View`
    height: 15%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
type menuProps = {
  active: boolean,
  home: string,
  favorite: string,
}

const Menu = (props:menuProps) => {

  const homeScreen = "Home"
  const favoriteScreen = "Favorite"
  
  let activeElement = props.active
  const navigation = useNavigation()


  return (
  <MenuContainer>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}
      >
      <CustomButton isActiveState={activeElement} name={homeScreen} />

    </TouchableOpacity>  
      <TouchableOpacity 
        onPress={() => navigation.navigate("Favorite")  }
       >
          <CustomButton isActiveState={!activeElement} name={favoriteScreen} />
      </TouchableOpacity>
   </MenuContainer>
  )
}

export default Menu