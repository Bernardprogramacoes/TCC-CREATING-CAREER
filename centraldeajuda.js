import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

export default function CentralDeAjudaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0c0a3e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Central de Ajuda</Text>
      </View>

      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bem-vindo à Central de Ajuda do Creating Career!</Text>
          <Text style={styles.sectionText}>
            Aqui você encontra respostas para as perguntas mais frequentes, guias detalhados e suporte para qualquer problema que possa ter com nosso aplicativo.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Começando</Text>

          <Text style={styles.question}>1.1. Como criar uma conta?</Text>
          <Text style={styles.answer}>
            Para criar uma conta, siga os seguintes passos:
            {"\n"}1. Abra o aplicativo e clique em "Registrar".
            {"\n"}2. Insira suas informações pessoais, como nome, e-mail e senha.
            {"\n"}3. Clique em "Criar Conta" e siga as instruções para verificar seu e-mail.
          </Text>

          <Text style={styles.question}>1.2. Como editar meu perfil?</Text>
          <Text style={styles.answer}>
            1. Faça login na sua conta.
            {"\n"}2. Vá para a seção "Perfil".
            {"\n"}3. Clique em "Editar Perfil" e atualize suas informações.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Gerenciamento de Currículo</Text>

          <Text style={styles.question}>2.1. Como criar um currículo?</Text>
          <Text style={styles.answer}>
            1. Acesse a aba "Currículo".
            {"\n"}2. Clique em "Criar Novo Currículo".
            {"\n"}3. Preencha as informações necessárias, como experiência de trabalho, educação e habilidades.
            {"\n"}4. Salve seu currículo.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Cursos</Text>

          <Text style={styles.question}>3.1. Como acessar os cursos?</Text>
          <Text style={styles.answer}>
            1. Navegue até a aba "Cursos".
            {"\n"}2. Explore os cursos disponíveis e clique no curso desejado.
            {"\n"}3. Se você é um usuário premium, clique em "Iniciar Curso". Caso contrário, será necessário assinar o plano premium.
          </Text>

          <Text style={styles.question}>3.2. Como assinar o plano premium?</Text>
          <Text style={styles.answer}>
            1. Vá para a seção "Premium".
            {"\n"}2. Escolha o plano que melhor se adequa a você.
            {"\n"}3. Siga as instruções de pagamento para completar a assinatura.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Preparação para Entrevistas</Text>

          <Text style={styles.question}>4.1. Como usar a ferramenta de preparação para entrevistas?</Text>
          <Text style={styles.answer}>
            1. Acesse a aba "Entrevistas".
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Configurações de Privacidade</Text>

          <Text style={styles.question}>5.1. Como ajustar as configurações de privacidade?</Text>
          <Text style={styles.answer}>
            1. Vá para a seção "Configurações".
            {"\n"}2. Clique em "Privacidade".
            {"\n"}3. Ajuste as configurações conforme suas preferências, como visibilidade do perfil e compartilhamento de dados.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>6. Segurança</Text>

          <Text style={styles.question}>6.1. Como alterar minha senha?</Text>
          <Text style={styles.answer}>
            1. Acesse "Configurações".
            {"\n"}2. Clique em "Segurança" e depois em "Alterar Senha".
            {"\n"}3. Insira sua senha atual e a nova senha desejada.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>7. Perguntas Frequentes (FAQ)</Text>

          <Text style={styles.question}>7.1. O que fazer se esquecer minha senha?</Text>
          <Text style={styles.answer}>
            1. Na tela de login, clique em "Esqueci minha senha".
            {"\n"}2. Insira seu e-mail registrado e siga as instruções para redefinir sua senha.
          </Text>

          <Text style={styles.question}>7.2. Como atualizar minhas informações de pagamento?</Text>
          <Text style={styles.answer}>
            1. Vá para a seção "Configurações".
            {"\n"}2. Clique em "Pagamento" e atualize suas informações de pagamento.
          </Text>

          <Text style={styles.sectionText}>
            Se você não encontrar a resposta que procura, por favor, entre em contato com nossa equipe de suporte. Estamos aqui para ajudar!
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