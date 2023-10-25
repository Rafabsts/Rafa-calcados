import { View, Text, StyleSheet } from 'react-native';

export default function TelaSobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Sobre a Empresa</Text>

            <Text>A Adidas (estilizada como ɑdidɑs desde 1949) é uma empresa de calçados, roupas esportivas e equipamentos esportivos fundada na Alemanha.
                Tem o nome de seu fundador, Adolf Dassler, também conhecido pelo apelido de Adi, que começou a produzir sapatilhas nos anos 1920, juntamente com o seu irmão Rudolf Dassler,
                em Herzogenaurach, próximo de Nuremberg. O nome "adidas" é uma união entre o nickname de Adolf, Adi, e o início do seu apelido, Dassler.
                A empresa criada pelos irmãos foi fundada em 1920, porém, foi dividida em 1948, dando origem à Adidas e também à Puma, empresa rival fundada por Rudolf Dassler,
                irmão de Adi.
                Na adidas, somos otimistas rebeldes movidos pela ação, com o desejo de moldarmos juntos um futuro melhor.
                Vemos o mundo do esporte e da cultura com possibilidades onde outros só veem o impossível.
                “Impossível é Nada” não é um slogan para nós. Ao sermos optimistas e conhecermos o poder do desporto,
                vemos infinitas possibilidades de aplicar esse poder e capacitar todas as pessoas através da acção.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    }
});