import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);

// import React from "react";
// import { StatusBar } from "react-native";
// import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
// export default class HomeScreen extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button
//               transparent
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}>
//               <Icon name="menu" />
//             </Button>
//           </Left>
//           <Body>
//             <Title>HomeScreen</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content padder>
//           <Card>
//             <CardItem>
//               <Body>
//                 <Text>Chat App to talk some awesome people!</Text>
//               </Body>
//             </CardItem>
//           </Card>
//           <Button full rounded dark
//             style={{ marginTop: 10 }}
//             onPress={() => this.props.navigation.navigate("Chat")}>
//             <Text>Chat With People</Text>
//           </Button>
//           <Button full rounded primary
//             style={{ marginTop: 10 }}
//             onPress={() => this.props.navigation.navigate("Profile")}>
//             <Text>Goto Profiles</Text>
//           </Button>
//         </Content>
//       </Container>
//     );
//   }
// }
