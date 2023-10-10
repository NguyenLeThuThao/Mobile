import React from 'react';
import { Text } from 'react-native';
import Home from "./src/Screens/Home";
import Bookmark from './src/Screens/Bookmarks';
import Search from './src/Screens/Search';
import Categories from './src/Screens/Categories';
import ProfileScreens from './src/Screens/ProfileScreens';
import ScreensStack from './src/Screens/ScreensStack';

const App =()=>{
return (
  <ScreensStack/>
)
}
export default App;