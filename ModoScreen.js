import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../../theme/themescontext'; 
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const ModoScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigation = useNavigation();

  const loadThemePreference = async () => {
    try {
      const theme = await AsyncStorage.getItem('themePreference');
      if (theme !== null) {
        toggleTheme(theme === 'dark');
      }
    } catch (e) {
      console.error('Erro ao carregar a preferência de tema', e);
    }
  };

  useEffect(() => {
    loadThemePreference();
  }, );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#FFF' }]}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFF" /> 
        </TouchableOpacity>
        <Text style={[styles.title, { color: '#FFF' }]}>Modo</Text> 
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[styles.option, !isDarkMode && styles.selected]}
          onPress={() => toggleTheme(false)}
        >
          <Text style={[styles.optionText, { color: isDarkMode ? '#FFF' : '#000' }]}>Claro</Text>
          {!isDarkMode && (
            <Icon name="checkmark" size={24} color="#007BFF" style={styles.checkIcon} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, isDarkMode && styles.selected]}
          onPress={() => toggleTheme(true)}
        >
          <Text style={[styles.optionText, { color: isDarkMode ? '#FFF' : '#000' }]}>Escuro</Text>
          {isDarkMode && (
            <Icon name="checkmark" size={24} color="#007BFF" style={styles.checkIcon} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#0c0a3e', 
  },
  backButton: {
    paddingRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF', 
  },
  optionContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  selected: {
    backgroundColor: '#e6f0ff', 
  },
  optionText: {
    fontSize: 18,
  },
  checkIcon: {
    marginLeft: 10,
  },
});