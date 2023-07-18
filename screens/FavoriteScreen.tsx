import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useSelector, useDispatch} from "react-redux"
import React, {useLayoutEffect, useState, useEffect} from 'react'
import PhotoCell from '../components/PhotoCell'
import { FlashList } from "@shopify/flash-list";
import Menu from "../components/Menu"
import styled from 'styled-components/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'

const Container = styled.SafeAreaView`
   background-color: #b7410e;
   height: 100%;
`

const Header = styled.View`
   height: 13%;
   align-items: center;
   justify-content: center;
`

const Highlight = styled.Text`
   color: #000000;
   font-size: 36px;
   font-weight: bold;
`

const FlashListFavoriteContainer = styled.View`
   justify-content: center;
   height: 72%;
   width: 100%;
   background: #ffffff;
`

const FavoriteScreen = (props) => {
  const navigation = useNavigation();
  const photo = useSelector((state)=> state["isUserLiked"].favoriteElement)

  let photos = []
  photo.map((item) => { 
    photos.push(item["item"])
  })
  
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
  },);

  return (
    <Container>
      <Header>
       <Highlight>{props["route"].name}</Highlight>
      </Header>
      <FlashListFavoriteContainer>
       <FlashList 
        data = {photos}
        renderItem = {({item}) => {
          return <PhotoCell item={item}   />;
        }}
        estimatedItemSize={350}
        numColumns= {2}
       />
     </FlashListFavoriteContainer>
     <Menu active={false} home={"Home"} favorite={"Favorite"} />
    </Container>
  )
}

export default FavoriteScreen