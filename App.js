// /**
//  * Sample React Native App
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import HomeScreen from "./src/HomeScreen/index.js";

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
  

//   return (
//     <>
//       <HomeScreen />;
//     </>
//   );
// };


// export default App; test

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={ require('./src/images/splash.jpg') } style={{width: '100%', height: '100%'}}>
      </ImageBackground>

    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
