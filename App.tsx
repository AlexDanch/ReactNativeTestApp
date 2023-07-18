import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import { StyleSheet, Text, View } from 'react-native'

// Redux
import { Provider } from "react-redux"
// import  store  from "./redux/store"
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

// Screens
import HomeScreen from './screens/HomeScreen'
import FavoriteScreen from './screens/FavoriteScreen'



const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: #BF4F74;
`

export type RootStackParams = {
   Home: {
     name: string;
   },
   Favorite,
  
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
  <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}>
     <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
         <Stack.Screen 
          name="Favorite" 
          component={FavoriteScreen} 
        />
      
      </Stack.Navigator>
      </NavigationContainer>
     </PersistGate>
  </Provider>
  );
}

