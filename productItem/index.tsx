import { View, Image, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';

import adidas from '../../../assets/adidas.png';
import tenis1 from '../../../assets/Tenis1.png';
import tenis2 from '../../../assets/tenis2.png';
import tenis3 from '../../../assets/tenis3.jpg';
import tenis4 from '../../../assets/tenis4.jpg';
import tenis5 from '../../../assets/tenis5.png';
import tenis11 from '../../../assets/tenis11.png';
import tenis22 from '../../../assets/tenis22.png';

export default function ProdutoItem() {
  return (
  <ScrollView style={styles.container}>
  <SafeAreaView>
  <View style={styles.container}>
    <Image source={require('../../../assets/adidas.png')} />
    <Text>Tenis Adidas Preto e Amarelo: R$ 54,99</Text>
  </View>
  <View style={styles.container}>
    <Image source={require( '../../../assets/Tenis1.png')}/>
    <Text>Tenis Adidas Verde: R$ 49,99</Text>
  </View>
 <View> <View style={styles.container}>
    <Image source={require('../../../assets/tenis2.png')} />
    <Text>Tenis Adidas Brancoe Preto:
      R$ 69,99 </Text>
      </View>
      <View style={styles.container}></View>
      <Image source={require('../../../assets/Tenis3.png')} />
      <Text>Tenis Adidas Rosa Fem Impus:
        R$ 69,99 </Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../../../assets/Tenis4.png')} />
        <Text>Tenis Adidas Black:
        R$ 59,99 </Text>
        </View>
        <View style={styles.container}>
        <Image source={require('../../../assets/Tenis5.png')} />
          <Text>Tenis Adidas Black:
            R$ 59,99 </Text>
        </View>
        <View style={styles.container}>
          <Image source={require('../../../assets/Tenis11.png')} />
          <Text>Tenis Adidas Preto e Amarelo:
            R$ 59,99 </Text>
        </View>
        <View style={styles.container}>
          <Image source={require('../../../assets/Tenis22.png')} />
          <Text>Tenis Adidas Kids:
            R$ 59,99 </Text>
        </View>
        {}
     </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,},
    scrollView: {
      backgroundColor: 'green',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
 