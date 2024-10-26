import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PremiumBlockedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon name="lock" size={80} color="#0c0a3e" style={styles.lockIcon} />
      <Text style={styles.title}>Acesso Bloqueado</Text>
      <Text style={styles.message}>
        Este recurso é exclusivo para usuários Premium. Por favor, volte para a tela inicial.
      </Text>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-left" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Voltar para Tela Inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  lockIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c0a3e',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#0c0a3e',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c0a3e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});