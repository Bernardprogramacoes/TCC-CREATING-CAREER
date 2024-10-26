import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ConfiguracoesScreen({ navigation, toggleTheme }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="#0c0a3e" 
        translucent={false}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Configurações</Text>
      </View>
      
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Minha Conta</Text>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ContaSeguranca')}>
            <Text style={styles.optionText}>Conta & Segurança</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Endereco')}>
            <Text style={styles.optionText}>Meu Endereço</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Definições</Text>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ConfiguracaoNotificacao')}>
            <Text style={styles.optionText}>Configurações de notificação</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ConfiguracaoSistema')}>
            <Text style={styles.optionText}>Configurações do Sistema</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Suporte</Text>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('CentralDeAjuda')}>
            <Text style={styles.optionText}>Central de Ajuda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Politica')}>
            <Text style={styles.optionText}>Política de Privacidade</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Acessibilidade</Text>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Modo')}>
            <Text style={styles.optionText}>Alternar Modo Escuro/Claro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#0c0a3e', 
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  section: {
    marginBottom: 20,
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
  option: {
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#0c0a3e',
  },
});