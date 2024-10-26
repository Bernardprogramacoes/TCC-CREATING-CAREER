import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Platform, StatusBar, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function EntrevistaScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6; 

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('ModelosEntrevista');
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      navigation.navigate('MateriaisScreen');
    }
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderPageContent = () => {
    if (currentPage === 1) {
      return (
        <>
          <Text style={styles.sectionTitle}>Guia para uma Entrevista Profissional de Sucesso</Text>
          <Text style={styles.text}>
            A entrevista de emprego representa uma etapa crucial no processo de seleção, onde sua habilidade de comunicação, profissionalismo e preparação são testados. Para garantir uma experiência bem-sucedida, algumas diretrizes podem ser seguidas:
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Preparação Antecipada: Pesquise sobre a empresa, sua cultura organizacional, e o cargo específico para o qual está se candidatando. Conhecer detalhes sobre a missão, visão e valores da empresa demonstra interesse genuíno e preparação.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Apresentação Pessoal: A vestimenta deve refletir o ambiente corporativo da empresa. Opte por roupas conservadoras e adequadas ao cargo pretendido. Cuidados com higiene pessoal e uma postura confiante são igualmente importantes.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Pontualidade: Chegue à entrevista alguns minutos antes do horário marcado. Isso não apenas demonstra respeito pelo tempo do entrevistador, mas também mostra sua capacidade de organização e comprometimento.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Comunicação Eficaz: Durante a entrevista, seja claro e objetivo ao responder às perguntas. Demonstre suas habilidades e experiências relevantes de forma articulada, utilizando exemplos concretos sempre que possível.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Demonstração de Interesse: Faça perguntas pertinentes sobre a empresa e o papel que você desempenhará. Isso não apenas mostra seu interesse na posição, mas também sua disposição para contribuir de maneira significativa.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Postura Profissional: Mantenha uma postura corporal aberta e receptiva. Olhe nos olhos do entrevistador enquanto fala e evite gestos que possam transmitir nervosismo ou desinteresse.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Agradecimento: Após a entrevista, envie uma nota de agradecimento por e-mail ao entrevistador, agradecendo pela oportunidade e reiterando seu interesse na posição.
          </Text>

          <View style={styles.divider} />
        </>
      );
    } else if (currentPage === 2) {
      return (
        <>
          <Text style={styles.sectionTitle}>Curiosidade</Text>
          <Text style={styles.text}>
            Você sabia que a prática de enviar notas de agradecimento após entrevistas de emprego começou nos Estados Unidos? Essa prática se tornou uma norma de etiqueta profissional, refletindo o apreço pelo tempo investido pelos entrevistadores e reforçando o interesse genuíno do candidato na posição.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Lembre-se, uma entrevista é uma oportunidade para mostrar não apenas suas habilidades técnicas, mas também suas qualidades pessoais e profissionais. Ao seguir estas diretrizes, você estará mais preparado para impressionar durante o processo seletivo.
          </Text>

          <View style={styles.divider} />
        </>
      );
    } else if (currentPage === 3) {
      return (
        <>
          <Text style={styles.sectionTitle}>Vestimentas</Text>
          <Text style={styles.text}>
            Na escolha da vestimenta para uma entrevista, é essencial considerar a impressão que você deseja causar e a cultura da empresa onde está se candidatando. Aqui estão algumas diretrizes gerais que podem ajudá-lo a escolher a vestimenta adequada:
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Pesquise a Cultura da Empresa: Antes da entrevista, procure informações sobre a cultura da empresa. Algumas organizações têm um ambiente mais formal, onde ternos e roupas corporativas são esperados, enquanto outras têm uma abordagem mais casual.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Opte por Roupas Conservadoras: Em geral, é mais seguro escolher roupas que sejam conservadoras e profissionais. Para homens, isso pode significar um terno bem cortado ou calça social e camisa com uma gravata. Para mulheres, um tailleur, um vestido ou uma combinação de calça e blusa são opções adequadas.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Cores e Estilo: Cores neutras como preto, cinza, azul-marinho e bege são sempre seguras. Evite padrões muito chamativos ou cores fluorescentes que possam distrair. O estilo deve ser sóbrio e adequado ao ambiente corporativo.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Cuidado com os Detalhes: Certifique-se de que suas roupas estejam limpas, passadas e em bom estado. Sapatos devem estar limpos e em bom estado de conservação. Acessórios como cintos, bolsas e jóias devem ser discretos e não devem chamar mais atenção do que você.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Adapte-se ao Cargo: Se estiver se candidatando para um cargo mais criativo ou em uma startup com uma cultura mais descontraída, você pode ajustar sua vestimenta para refletir isso, mantendo sempre um padrão de aparência profissional.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.text}>
            Conforto e Confiança: Escolha roupas nas quais você se sinta confortável e que transmitam confiança. Isso ajudará você a se concentrar na entrevista sem se preocupar com sua aparência.
          </Text>

          <View style={styles.divider} />
        </>
      );
    } else if (currentPage === 4) {
      return (
        <>
          <Text style={styles.sectionTitle}>Modelos de Entrevista</Text>
          <Text style={styles.text}>
            Existem diversos modelos de entrevista, e estar preparado para diferentes formatos pode ser um diferencial.
          </Text>

          <Text style={styles.text}>
            1. Entrevista presencial: A forma mais tradicional, em que o candidato se apresenta pessoalmente à empresa.
          </Text>

          <Text style={styles.text}>
            2. Entrevista por vídeo: Cada vez mais comum, especialmente após a pandemia. Certifique-se de que seu equipamento está funcionando corretamente e escolha um local silencioso para a chamada.
          </Text>

          <Text style={styles.text}>
            3. Entrevista por telefone: Geralmente usada em triagens iniciais. Mantenha um tom de voz claro e objetivo.
          </Text>
        </>
      );
    } else if (currentPage === 5) {
      return (
        <>
          <Text style={styles.sectionTitle}>Veja alguns Artigos:</Text>

          <TouchableOpacity onPress={() => openLink('https://fia.com.br/blog/entrevista-de-emprego/')}>
            <View style={styles.article}>
              <Text style={styles.articleTitle}>Artigo Fia</Text>
            </View>
          </TouchableOpacity>

          
          <Text style={styles.sectionTitle}>Veja algumas Entrevistas:</Text>

          <TouchableOpacity onPress={() => openLink('https://www.youtube.com/watch?v=f_0FlkH7e-Y')}>
            <View style={styles.article}>
              <Text style={styles.articleTitle}>Entrevista 1 - Laura Widal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.youtube.com/watch?v=l1g4WNa3Ycc')}>
            <View style={styles.article}>
              <Text style={styles.articleTitle}>Entrevista 2 - Na Prática</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.youtube.com/watch?v=TgBIuGH_ODg')}>
            <View style={styles.article}>
              <Text style={styles.articleTitle}>Entrevista 3 - Tv Barbante</Text>
            </View>
          </TouchableOpacity>
        </>
      );
    } else if (currentPage === 6) {
      return (
        <>
          <Text style={styles.sectionTitle}>Dicas Finais e Preparação</Text>
          <Text style={styles.text}>
            Agora que você conhece os tipos de entrevista, é essencial se preparar para cada um. A preparação antecipada, o cuidado com a apresentação e o conhecimento sobre a empresa são fundamentais para ter sucesso.
          </Text>

          <Text style={styles.text}>
            Não se esqueça de treinar sua comunicação e de praticar respostas para perguntas comuns de entrevista, adaptando-as para suas experiências e habilidades. Boa sorte!
          </Text>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('MateriaisScreen')} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Entrevista</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        {renderPageContent()}

        <View style={styles.navigationButtons}>
          {currentPage > 1 && (
            <TouchableOpacity style={styles.prevButton} onPress={handlePreviousPage}>
              <Feather name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>
          )}

          {currentPage < totalPages ? (
            <TouchableOpacity style={styles.nextButton} onPress={handleNextPage}>
              <Feather name="chevron-right" size={24} color="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('MateriaisScreen')}>
              <Text style={styles.buttonText}>Finalizar</Text>
              <Feather name="check" size={20} color="#fff" style={{ marginLeft: 5 }} />
          </TouchableOpacity>
          )}
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c0a3e', 
    padding: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 60, 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  prevButton: {
    backgroundColor: '#0c0a3e', 
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#0c0a3e', 
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  article: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0c0a3e', 
  },
});