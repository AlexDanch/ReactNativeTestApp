import { View, Text, Image, SafeAreaView, TextInput, ScrollView, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useSelector, useDispatch} from "react-redux"
import { FlashList } from "@shopify/flash-list";
import filter from "lodash.filter"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import styled from 'styled-components/native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import PhotoCell from '../components/PhotoCell'
import Menu from "../components/Menu"
import { RootStackParams } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Container = styled.SafeAreaView`
    background: #f9f6b4;
`
const Header = styled.View`
    height: 13%;
    align-items: center;
    justify-content: center;
`
const Highlight = styled.Text`
     background: #f9f6b4;
     color: #000000;
     font-size: 36px;
     font-weight: bold;
`

const SearchView = styled.View`
     background: #d3d3d3;
     height: 7%;
     align-items: center;
     flex-direction: row;
     padding-left: 17px;
     gap: 5px;
`

const FlashListContainer = styled.View`
   justify-content: center;
   height: 65%;
   width: 100%;
   background: #ffffff;
`

const HomeScreen = (props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
    
  }, );

  const [photos, setPhotos] = useState([])
  const [likedId, setLikedId] = useState()
  const [searchQuery, setSearchQuery] = useState("")
  const likedPhoto = useSelector((state)=> state["likes"].likedId)
  const [pemanentPhotos, setPermanentsPhotos] = useState([])

  const url = "https://jsonplaceholder.typicode.com/photos?albumId=1"
  useEffect(()=> {
    fetch(url)
    .then(response => {
      response.json()
    .then(data=> {
      data.map((element) => {
        if (likedPhoto.includes(element["id"])) {
          element.isLiked = true
        }else {
          element.isLiked = false
        }
      })
      setPhotos(data)
      setPermanentsPhotos(data)
    })
    })

  }, [])

  const  handleSearch = (query) => {
    if (query != ""){
    setSearchQuery(query)
    const formatedQuery = query.toLowerCase()
    const filteredData= filter(pemanentPhotos, (photo) => {
       return contains(photo, formatedQuery)
    })
    setPhotos(filteredData)
  } else{
    setPhotos(pemanentPhotos)
    setSearchQuery(query)
  }
  }
  
  const contains = ({title}, query) => {
       if (title.includes(query)) {
         return true
       }else {
         return false
       }
  }
  
  return (
  <Container>
    <Header>
      <Highlight>{props["route"].name}</Highlight>
    </Header>
    <SearchView>
      <FontAwesome name="search" size={22} color="#808080" />
      <TextInput 
        style={{fontSize: 20, fontWeight:"bold", width: 300}} 
        placeholder="Search" 
        clearButtonMode="always"
        autoCapitalize="none"
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}
      />
    </SearchView >

    <FlashListContainer>
      <FlashList 
        data = {photos}
        renderItem = {({item}) => {
          return <PhotoCell item={item}  />;
        }}
        estimatedItemSize={350}
        numColumns= {2}
      />
     </FlashListContainer>

     <Menu active={true} home={"Home"} favorite={"Favorite"} />

  </Container>
  )
}


export default HomeScreen;