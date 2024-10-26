import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import { UserContext } from '../../context/UserContext'; 
import { PhoneContext } from '../../context/PhoneContext'; 

export default function EnderecoScreen({ navigation }) {
  const { nome } = useContext(UserContext); 
  const { phone, setPhone } = useContext(PhoneContext); 

  const [endereco, setEndereco] = useState({
    nome: nome || 'Nome de usuário', 
    telefone: phone || 'Adicione seu telefone',
    rua: 'Adicione a sua Rua',
    cidade: 'Adicione sua Cidade e Cep',
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [novoNome, setNovoNome] = useState(endereco.nome);
  const [novoTelefone, setNovoTelefone] = useState(endereco.telefone);
  const [novaRua, setNovaRua] = useState(endereco.rua);
  const [novaCidade, setNovaCidade] = useState(endereco.cidade);

  const salvarAlteracoes = () => {
    setEndereco({
      nome: novoNome,
      telefone: novoTelefone,
      rua: novaRua,
      cidade: novaCidade,
    });

    setPhone(novoTelefone); 
    setModalVisible(false); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0c0a3e" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Meu Endereço</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Endereço</Text>
        <Text style={styles.addressText}>{endereco.nome} | {endereco.telefone}</Text>
        <Text style={styles.addressText}>{endereco.rua}</Text>
        <Text style={styles.addressText}>{endereco.cidade}</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Endereço</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={novoNome}
              onChangeText={setNovoNome}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              value={novoTelefone}
              onChangeText={setNovoTelefone}
            />
            <TextInput
              style={styles.input}
              placeholder="Rua"
              value={novaRua}
              onChangeText={setNovaRua}
            />
            <TextInput
              style={styles.input}
              placeholder="Cidade"
              value={novaCidade}
              onChangeText={setNovaCidade}
            />

            <TouchableOpacity style={styles.modalButton} onPress={salvarAlteracoes}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButtonCancelar} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ecf0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c0a3e',
  },
  section: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c0a3e',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    color: '#0c0a3e',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#0c0a3e',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0c0a3e',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  modalButton: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#0c0a3e',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonCancelar: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#d9534f',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});
