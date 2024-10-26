import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function CurriculoScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('ModelosCurriculo');
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderPageContent = () => {
    if (currentPage === 1) {
      return (
        <>
          <Text style={styles.sectionTitle}>Como Montar?</Text>
          <Text style={styles.paragraph}>
            1. Cabeçalho: coloque dados pessoais e informações de contato{'\n'}
            2. Resumo: seja breve, mas impactante{'\n'}
            3. Objetivos profissionais: personalize para cada vaga{'\n'}
            4. Vivência profissional: inclua suas realizações{'\n'}
            5. Formação acadêmica: valorize sua educação{'\n'}
            6. Cursos complementares: priorize os mais relevantes{'\n'}
            7. Habilidades e competências: escolha o que destacar{'\n'}
            8. Informações complementares: utilize se necessário{'\n'}
            9. Palavras-chave: como tornar o currículo atrativo
          </Text>
        </>
      );
    } else if (currentPage === 2) {
      return (
        <>
          <Text style={styles.sectionTitle}>Estrutura</Text>
          <Text style={styles.paragraph}>
            Normalmente, a estrutura de um currículo simples e básico deve conter os seguintes tópicos:{'\n'}
            - Dados pessoais{'\n'}
            - Área de atuação e objetivo profissional{'\n'}
            - Formação acadêmica{'\n'}
            - Experiência profissional{'\n'}
            - Cursos e qualificações{'\n'}
            - Atividades extracurriculares ou informações complementares.
          </Text>
        </>
      );
    } else if (currentPage === 3) {
      return (
        <>
          <Text style={styles.sectionTitle}>Onde Fazer?</Text>
          <Text style={styles.paragraph}>
            Para currículos em PDF ou com design diferente, que você pretende enviar por e-mail, você pode utilizar ferramentas como o Word, o Google Docs ou mesmo o Canva. Lembre-se que, a menos que você seja de uma área como design, é melhor focar no conteúdo e deixar o layout mais simples e objetivo.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Como Deve Ser Entregue?</Text>
          <Text style={styles.paragraph}>
            Em alguns casos, as empresas podem pedir explicitamente que o currículo seja entregue em um envelope. Nesses casos, é importante seguir as instruções da empresa e apresentar o currículo da forma solicitada. No entanto, se a empresa não especificou o uso do envelope, é seguro entregar o currículo sem ele.
          </Text>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#0c0a3e"
        translucent={false}
      />

      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('MateriaisScreen')} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Currículo</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderPageContent()}

        <View style={styles.navigationButtons}>
          {currentPage > 1 && (
            <TouchableOpacity style={styles.buttonNav} onPress={handlePreviousPage}>
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.buttonNav} onPress={handleNextPage}>
            <Feather name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.dividerBottomMenu} />

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
    height: 60,
    backgroundColor: '#0c0a3e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  backButton: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 60, 
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#0c0a3e',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonNav: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0c0a3e',
    borderRadius: 5,
  },
  dividerBottomMenu: {
    height: 1,
    backgroundColor: '#0c0a3e',
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
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
});