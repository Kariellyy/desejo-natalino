import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, Modal, Animated, TouchableOpacity, Image } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';

export default function App() {
  // Lista para armazenar os desejos
  const [desejos, setDesejos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); 

  // Animação de slide para o modal
  const modalY = useState(new Animated.Value(300))[0]; 

  // Função que recebe os dados do Form e adiciona à lista de desejos
  const handleSaveDesejo = (novoDesejo) => {
    setDesejos(prevDesejos => [...prevDesejos, novoDesejo]);
  };

  // Função para abrir o modal com animação de slide
  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalY, {
      toValue: 0,  
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Função para fechar o modal com animação
  const closeModal = () => {
    Animated.timing(modalY, {
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false); 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form onSaveDesejo={handleSaveDesejo} />

      {/* Imagem que funciona como um botão para abrir o modal */}
      <TouchableOpacity onPress={openModal} style={styles.imageButton}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20240926/original/pngtree-santa-claus-carrying-gift-bag-red-cartoon-isolated-on-transparent-background-png-image_16098434.png',
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      {/* Modal para visualizar os desejos salvos */}
      <Modal
        transparent={true} 
        visible={modalVisible}
        animationType="none"  
        onRequestClose={closeModal} 
      >
        {/* View do Modal com animação */}
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY: modalY }] }]}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Lista de Desejos de Natal</Text>

            {/* Exibe a lista de desejos */}
            <DesejosList desejos={desejos} />

            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </SafeAreaView>
  );
}

// Componente de Lista de Desejos
const DesejosList = ({ desejos }) => {
  return (
    <FlatList
      data={desejos}
      renderItem={({ item }) => (
        <View style={styles.desejoItem}>
          <Text style={styles.desejoText}>
            <Text style={styles.bold}>{item.nome}, {item.idade} anos: </Text>
            {item.desejo}
          </Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      style={styles.desejosList}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  imageButton: {
    marginTop: 20, 
    alignItems: 'center',  
  },
  image: {
    width: 100,  
    height: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',  
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '80%',  
    alignItems: 'center',
    overflow: 'hidden', 
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B22222',
    marginBottom: 10,
  },
  desejoItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  desejoText: {
    fontSize: 16,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#B22222',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  desejosList: {
    width: '100%',
    flex: 1,  
    paddingBottom: 20,  
  },
});
