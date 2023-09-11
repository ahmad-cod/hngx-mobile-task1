import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const slackName = 'great_aroyehun';
const slackProfilePictureUrl = 'https://res.cloudinary.com/annasr800/image/upload/v1671186534/IMG_20221216_105812_081_cqmnly.jpg';
const githubProfileUrl = 'https://github.com/ahmad-cod';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'great_aroyehun greets you'}} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{title: 'My humble github profile'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleOpenGitHub = () => {
    navigation.navigate('WebViewScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.slackName}>{slackName}</Text>
      <Image
        source={{ uri: slackProfilePictureUrl }}
        style={styles.image}
      />
      <Button
        title="Open My GitHub Profile"
        onPress={handleOpenGitHub}
      />
    </View>
  );
}

function WebViewScreen() {
  return (
    <WebView
      style={{ flex: 1, width: '100%' }}
      source={{ uri: githubProfileUrl }}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center' 
  },
  slackName: {
    fontSize: 30, 
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 50,
  },
});
