import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function Form({ onSaveDesejo }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [desejo, setDesejo] = useState('');

  const handleEnviar = () => {
    if (nome && idade && desejo) {
      // Criar um objeto com as informações do desejo
      const novoDesejo = { nome, idade, desejo };
      // Passa os dados para o App.js
      onSaveDesejo(novoDesejo); 

      alert("Desejo enviado com sucesso!");
      // Limpa os campos após enviar
      setNome('');  
      setIdade('');
      setDesejo('');
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Desejo de Natal</Text>
        <TextInput
          style={styles.input}
          value={desejo}
          onChangeText={setDesejo}
        />
      </View>
      <Button title="Enviar Desejo" onPress={handleEnviar} color="#B22222" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  field: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
