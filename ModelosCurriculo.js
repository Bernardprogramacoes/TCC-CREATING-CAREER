import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Platform, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function ModelosCurriculo({ navigation }) {

  const openPdf = (url) => {
    Linking.openURL(url).catch(err => console.error("Não foi possível abrir o PDF", err));
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#0c0a3e"
        translucent={false}
      />

     
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Modelos de Currículo</Text>
      </View>

     
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Escolha o modelo de currículo:</Text>

        <Text style={styles.descriptionText}>
          Siga com a representação de um modelo de currículo que equilibra elegância, simplicidade e clareza, ideal para destacar suas competências de forma profissional.
        </Text>

        
        <View style={styles.modeloItem}>
          <Text style={styles.modeloText}>Iniciante (primeira interação com o mercado de trabalho)</Text>
          <TouchableOpacity style={styles.button} onPress={() => openPdf('https://link-do-curriculo-iniciante.pdf')}>
            <Text style={styles.buttonText}>Visualizar</Text>
            <Feather name="file-text" size={20} color="#e74c3c" />
          </TouchableOpacity>
        </View>

        
        <View style={styles.modeloItem}>
          <Text style={styles.modeloText}>Intermediário (já tem um conhecimento sobre o mercado de trabalho)</Text>
          <TouchableOpacity style={styles.button} onPress={() => openPdf('https://link-do-curriculo-intermediario.pdf')}>
            <Text style={styles.buttonText}>Visualizar</Text>
            <Feather name="file-text" size={20} color="#e74c3c" />
          </TouchableOpacity>
        </View>

       
        <View style={styles.modeloItem}>
          <Text style={styles.modeloText}>Experiente (já possui formação e carreira no mercado de trabalho)</Text>
          <TouchableOpacity style={styles.button} onPress={() => openPdf('https://link-do-curriculo-experiente.pdf')}>
            <Text style={styles.buttonText}>Visualizar</Text>
            <Feather name="file-text" size={20} color="#e74c3c" />
          </TouchableOpacity>
        </View>

        
        <Text style={styles.referenceText}>
          Fonte: Modelos de currículo disponibilizados pela UNIFUCAMP.
          <Text style={styles.linkText} onPress={() => openPdf('https://www.unifucamp.edu.br/wp-content/uploads/2013/03/Modelos_de_curriculo.pdf')}>
            Clique aqui para acessar o PDF completo.
          </Text>
        </Text>

        
        <TouchableOpacity style={[styles.nextButton, { marginBottom: 30 }]} onPress={() => navigation.navigate('MateriaisScreen')}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>


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
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0c0a3e',
  },
  backButton: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 150,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0c0a3e',
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  modeloItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  modeloText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#e74c3c',
    marginRight: 5,
  },
  referenceText: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    fontStyle: 'italic',
  },
  linkText: {
    color: '#e74c3c',
    textDecorationLine: 'underline',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0c0a3e',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  nextButton: {
    backgroundColor: '#0c0a3e',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
});