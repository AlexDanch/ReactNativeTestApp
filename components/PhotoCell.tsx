import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome"
import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { addFavoriteElement,  deleteFavoriteElement } from "../redux/slice"
import { addLikedId, deleteLikedId } from '../redux/likesSlice'


const screenWidth = Dimensions.get('window').width
const fortyFivePercentWidth = (40 * screenWidth) / 100
const margin = (5 * screenWidth) / 100;


const CustomView = styled.View`
   height: 190px;
`

const CustomImage = styled.Image`
  width: 100%;
  height: 100%;
`
type photoProps = {
  item: {
    isLiked: boolean
    id: number
    url: string
    title: string
  }
}

const PhotoCell = (props: photoProps) => {
  const photo = props
  let color = null
  if (props["isLiked"]) {
    color = true
  }else {
    color = false
  }


  const likedPhotos = useSelector((state)=> state["likes"]["likedId"])
  if (!likedPhotos.includes(props["item"].id)){
    props.item.isLiked = false
  }
 
  const dispatch = useDispatch()

  const onLike_Dislike_Press = () =>{
    let togleLike = false
    if (likedPhotos.includes(props["item"].id)){
      togleLike = true
    }
    if (togleLike) {    
      dispatch(deleteFavoriteElement(photo["item"].id))
      dispatch(deleteLikedId(photo["item"].id))
     }else {
      photo["item"].isLiked = true
      dispatch(addLikedId(photo["item"].id))
      dispatch(addFavoriteElement(photo)) 
    }
  }

  return (
    <CustomView 
      style = {{width: fortyFivePercentWidth, marginLeft: margin, marginTop: margin  }}
    >
      <CustomImage
        source={{uri: props.item.url}}
        style = {{width: fortyFivePercentWidth }}
      />
      {/* </CustomImage> */}
     
      <View style={{position:'absolute', top: 145, left: 100}}>
       <TouchableOpacity onPress={onLike_Dislike_Press}
      >
        <FontAwesome 
          name="heart" 
          size={40} 
          color={props.item.isLiked ? "#dc143c": "#ffffff"}
         />
         </TouchableOpacity>
        </View>
      <Text>{props.item.title}</Text>
    </CustomView>
  )
}

export default PhotoCell