import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function NotificacoesScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="dark-content" 
        backgroundColor="#0c0a3e" 
        translucent={false} 
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notificações</Text>
      </View>

      <ScrollView contentContainerStyle={styles.notificationContainer}>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Atualizações do Perfil</Text>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>Atualização de informações pessoais</Text>
          </View>
        </View>

        <View style={styles.blankBox}></View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Cursos Disponíveis</Text>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>Novos cursos foram adicionados!</Text>
          </View>
        </View>

        <View style={styles.blankBox}></View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Feather name="home" size={24} color="#fff" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notificacoes')}>
          <Feather name="bell" size={24} color="#fff" />
          <Text style={styles.menuText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Comunidade')}>
          <Feather name="message-circle" size={24} color="#fff" />
          <Text style={styles.menuText}>Comunidade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PremiumBlocked')}>
          <Feather name="star" size={24} color="#fff" />
          <Text style={styles.menuText}>Premium</Text>
        </TouchableOpacity>
      </View>
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
    padding: 20,
    backgroundColor: '#0c0a3e',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  backButton: {
    padding: 5,
  },
  notificationContainer: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#0a2a66', 
    borderRadius: 10,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#ffffff', 
    marginBottom: 5,
    fontWeight: 'bold',
  },
  notificationItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
  blankBox: {
    height: 50, 
    backgroundColor: '#ffffff', 
    marginBottom: 20, 
    borderRadius: 8, 
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0c0a3e',
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});