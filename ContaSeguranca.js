import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import { EmailContext } from '../../context/EmailContext';

export default function ContaSeguranca({ navigation }) {
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const { email } = useContext(EmailContext); 

  const handleAlterarSenha = () => {
    if (novaSenha === confirmarSenha) {
      Alert.alert('Senha alterada com sucesso!');
      setAlterarSenha(false);
    } else {
      Alert.alert('As senhas não coincidem. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0c0a3e" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Conta & Segurança</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.infoLabel}>Telefone</Text>
        <Text style={styles.infoText}>*********</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.infoLabel}>E-mail</Text>
        <Text style={styles.infoText}>{email || 'E-mail não cadastrado'}</Text> 
      </View>

      <View style={styles.section}>
        <Text style={styles.infoLabel}>Contas de Redes Sociais</Text>
        <Text style={styles.optionText}>Facebook, Instagram, LinkedIn</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.infoLabel}>Alterar Senha</Text>
        {alterarSenha ? (
          <View>
            <Text style={styles.label}>Nova Senha</Text>
            <TextInput
              style={styles.input}
              value={novaSenha}
              onChangeText={setNovaSenha}
              secureTextEntry
              placeholder="Digite a nova senha"
            />
            <Text style={styles.label}>Confirmar Nova Senha</Text>
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
              placeholder="Confirme a nova senha"
            />
            <TouchableOpacity style={styles.button} onPress={handleAlterarSenha}>
              <Text style={styles.buttonText}>Alterar Senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAlterarSenha(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.option} onPress={() => setAlterarSenha(true)}>
            <Text style={styles.optionText}>Clique para alterar</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
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
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c0a3e',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  optionText: {
    fontSize: 16,
    color: '#0c0a3e',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0c0a3e',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#0c0a3e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#0c0a3e',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#0c0a3e',
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});