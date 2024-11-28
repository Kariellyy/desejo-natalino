import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/feliz.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Deixe seu pedido ao Papai Noel!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },

  image: {
    width: 200,
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B22222',
    textAlign: 'center',
  },
});
