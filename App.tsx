import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

import routes from '@react-navigation/bottom-tabs';
import TelaSobre from './src/screens/about';
import ProductItem from './src/screens/productItem';

export default function App() {
  return <Routes />
    // <View style={styles.container}>
    //   <Text>Tela Principal Adidas </Text>
    //   <StatusBar style="auto" />
    // </View>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
