import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

export default function ConfiguracaoSistemaScreen({ navigation }) {
  const [localizacao, setLocalizacao] = useState(false);
  const [galeria, setGaleria] = useState(false);
  const [camera, setCamera] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0c0a3e" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Configurações do Sistema</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Habilite para localizar o seu endereço</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Permitir acesso à localização</Text>
          <Switch
            value={localizacao}
            onValueChange={() => setLocalizacao(!localizacao)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Habilite para mudar foto</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Permitir acesso à galeria</Text>
          <Switch
            value={galeria}
            onValueChange={() => setGaleria(!galeria)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Habilite para tirar foto</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Permitir acesso à câmera</Text>
          <Switch
            value={camera}
            onValueChange={() => setCamera(!camera)}
          />
        </View>
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
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c0a3e',
    marginBottom: 10,
  },
  option: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#0c0a3e',
  },
});