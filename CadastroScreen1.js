import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';

export default function CadastroScreen1({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    navigation.navigate('Cadastro2', { email, senha });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0c0a3e" translucent={false} />
      
      <Image source={require('../assets/CC.png')} style={styles.logo} />

      <Text style={styles.logoText}>Creating Career</Text>
      
      <Text style={styles.welcomeText}>Seja bem-vindo(a)!</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <Text style={styles.noticeText}>
        A senha precisa ter pelo menos 8 caracteres.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Já tem uma conta?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Faça login.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01033A',
  },
  logo: {
    width: 120, 
    height: 120, 
    marginBottom: 20, 
    resizeMode: 'contain', 
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    width: '48%',
    justifyContent: 'center',
    padding: 15,
    color: '#000',
  },
  button: {
    width: '80%',
    backgroundColor: '#4e9af1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  noticeText: {
    fontStyle: 'italic', 
    color: '#ffcc00',
    fontSize: 14,
    marginBottom: 20,
  },
  loginText: {
    color: '#ffffff',
    marginTop: 10,
  },
  loginLink: {
    color: '#4e9af1',
    fontWeight: 'bold',
  },
});