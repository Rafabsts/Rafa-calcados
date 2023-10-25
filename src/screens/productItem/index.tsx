import { View, Image, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

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
    <SafeAreaView>
      <StatusBar />

      <View style={styles.container}>
        <View>
          <Image source={adidas} />
          <Text>Tenis Adidas Preto e Amarelo:
            R$ 54,99 </Text>
        </View>
        <View>
          <Image source={tenis1} />
          <Text>Tenis Adidas Verde:
            R$ 49,99 </Text>
        </View>
        <View>
          <Image source={tenis2} />
          <Text>Tenis Adidas Brancoe Preto:
            R$ 69,99 </Text>
        </View>
        <View>
          <Image source={tenis3} />
          <Text>Tenis Adidas Rosa Fem Impus:
            R$ 69,99 </Text>
        </View>
        <View>
          <Image source={tenis4} />
          <Text>Tenis Adidas Black:
            R$ 59,99 </Text>
        </View>
        <View>
          <Image source={tenis5} />
          <Text>Tenis Adidas Black:
            R$ 59,99 </Text>
        </View>
        <View>
          <Image source={tenis11} />
          <Text>Tenis Adidas Preto e Amarelo:
            R$ 59,99 </Text>
        </View>
        <View>
          <Image source={tenis22} />
          <Text>Tenis Adidas Kids:
            R$ 59,99 </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flex: 1
  }
});