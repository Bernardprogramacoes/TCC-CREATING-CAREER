import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function MateriaisScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="#0c0a3e" 
        translucent={false}
      />
      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Material de Apoio</Text>
      </View>
      <View style={styles.dividerTopBar} />

      <Text style={styles.sectionTitle}>
        Escolha a seção que gostaria de ver hoje, todas possuem modelos de exemplo em suas últimas páginas.
      </Text>

          <View style={styles.divider} />
          
      <ScrollView>
        <View style={styles.card}>
          <Icon name="file-text" size={40} color="#fff" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Como Montar Seu Currículo</Text>
            <Text style={styles.cardDescription}>
              Aprenda as melhores práticas para criar um currículo atraente e eficiente aos processos seletivos.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Curriculo')}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dividerCard} />

        <View style={styles.card}>
          <Icon name="user-check" size={40} color="#fff" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Dicas para se Portar em uma Entrevista de Emprego</Text>
            <Text style={styles.cardDescription}>
              Saiba como se destacar em entrevistas de emprego com dicas essenciais.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Entrevista')}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dividerCard} />

        <View style={styles.card}>
          <Icon name="briefcase" size={40} color="#fff" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Montagem e Modelos de Carta de Apresentação</Text>
            <Text style={styles.cardDescription}>
              Descubra como elaborar uma carta de apresentação que impressione.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CartaDeApresentacao')}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.dividerBottomMenu} />

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={24} color="#fff" /> 
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notificacoes')}>
          <Icon name="bell" size={24} color="#fff" /> 
          <Text style={styles.menuText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Comunidade')}>
          <Icon name="heart" size={24} color="#fff" /> 
          <Text style={styles.menuText}>Comunidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PremiumBlocked')}>
          <Icon name="star" size={24} color="#fff" /> 
          <Text style={styles.menuText}>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20, 
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
    backgroundColor: '#0c0a3e',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center', 
  },
  backButton: {
    position: 'absolute', 
    left: 10,
    padding: 10,
  },
  dividerTopBar: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#0c0a3e',
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#0c0a3e',
    borderRadius: 10,
    marginHorizontal: 20,  
    marginVertical: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#ddd',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
  },
  dividerCard: {
  height: 1,
  backgroundColor: '#ddd',
  marginVertical: 15,
  width: '80%', 
  alignSelf: 'center', 
  },
  icon: {
    marginRight: 10,
  },
  dividerBottomMenu: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0c0a3e',
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: 'center',
    padding: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
  },
});
