import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

export default function PoliticaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0c0a3e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Política de Privacidade</Text>
      </View>

      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossa Política de Privacidade</Text>
          <Text style={styles.sectionText}>
            Esta política descreve como tratamos suas informações pessoais quando você utiliza o nosso aplicativo.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Coleta de Informações</Text>

          <Text style={styles.question}>1.1. Quais informações coletamos?</Text>
          <Text style={styles.answer}>
            Coletamos informações como:
            {"\n"}1. Dados de cadastro (nome, e-mail, etc.)
            {"\n"}2. Informações sobre o uso do aplicativo.
          </Text>

          <Text style={styles.question}>1.2. Como essas informações são usadas?</Text>
          <Text style={styles.answer}>
            Usamos essas informações para melhorar nosso serviço, personalizar sua experiência e mantê-lo informado sobre atualizações.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Compartilhamento de Informações</Text>

          <Text style={styles.question}>2.1. Compartilhamos suas informações com terceiros?</Text>
          <Text style={styles.answer}>
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir a lei ou proteger nossos direitos.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Segurança</Text>

          <Text style={styles.question}>3.1. Como garantimos a segurança das suas informações?</Text>
          <Text style={styles.answer}>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Atualizações desta Política</Text>

          <Text style={styles.question}>4.1. Como saberemos de atualizações na política?</Text>
          <Text style={styles.answer}>
            Quaisquer alterações nesta política serão comunicadas através do aplicativo. Recomendamos que você revise periodicamente.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Contato</Text>

          <Text style={styles.question}>5.1. Como posso entrar em contato para esclarecer dúvidas?</Text>
          <Text style={styles.answer}>
            Caso tenha dúvidas sobre esta política, entre em contato com nossa equipe através do suporte no aplicativo ou pelo e-mail informado.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>6. Alterações nesta Política de Privacidade</Text>

          <Text style={styles.question}>6.1. Como serei notificado sobre alterações?</Text>
          <Text style={styles.answer}>
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas através do aplicativo ou por e-mail.
          </Text>
        </View>

      </ScrollView>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0c0a3e',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c0a3e',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c0a3e',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0c0a3e',
    marginTop: 10,
  },
  answer: {
    fontSize: 16,
    color: '#0c0a3e',
    marginTop: 5,
  },
  sectionText: {
    fontSize: 16,
    color: '#0c0a3e',
    marginTop: 5,
  },
});