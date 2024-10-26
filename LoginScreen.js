import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native'; 
import { EmailContext } from '../../context/EmailContext';

export default function LoginScreen({ navigation }) {
  const { setEmail } = useContext(EmailContext); 
  const [emailLocal, setEmailLocal] = useState('');  
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!emailLocal || !senha) {
      alert("Por favor, preencha o email e a senha.");
      return;
    }

    if (senha.length >= 8) {
      setEmail(emailLocal);  
      navigation.navigate('MainDrawer'); 
    } else {
      alert("Erro: A senha deve ter pelo menos 8 caracteres.");
    }
  };

  const handleNavigateToCadastro = () => {
    navigation.navigate('Cadastro1');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0c0a3e" translucent={false} />
      <Image source={require('../assets/CC.png')} style={styles.logo} />
      <Text style={styles.logoText}>Creating Career</Text>
      <Text style={styles.welcomeText}>Seja bem-vindo(a)!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={emailLocal}  
        onChangeText={setEmailLocal}  
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.registerText}>
        Não possui conta? <Text style={styles.registerLink} onPress={handleNavigateToCadastro}>Crie uma conta</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 55,  
    marginBottom: 20,
    paddingVertical: 12,  
    paddingHorizontal: 20,  
    color: '#000',
    fontSize: 16,  
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
  registerText: {
    color: '#ffffff',
    marginTop: 10,
  },
  registerLink: {
    color: '#4e9af1',
    fontWeight: 'bold',
  },
});