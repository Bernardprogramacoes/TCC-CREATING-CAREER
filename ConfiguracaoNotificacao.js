import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ConfiguracaoNotificacaoScreen({ navigation }) {
  const [emailNotificacao, setEmailNotificacao] = useState(true);
  const [appNotificacao, setAppNotificacao] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0c0a3e" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Configurações Notificação</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Notificação por E-mail</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.statusText}>{emailNotificacao ? 'Ativado' : 'Desativado'}</Text>
            <Switch
              value={emailNotificacao}
              onValueChange={() => setEmailNotificacao(!emailNotificacao)}
              style={styles.switch}
            />
          </View>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Notificação pelo Aplicativo</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.statusText}>{appNotificacao ? 'Ativado' : 'Desativado'}</Text>
            <Switch
              value={appNotificacao}
              onValueChange={() => setAppNotificacao(!appNotificacao)}
              style={styles.switch}
            />
          </View>
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
    flex: 1, 
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  statusText: {
    fontSize: 14,
    color: '#0c0a3e',
    marginRight: 8, 
  },
  switch: {
    transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
  },
});