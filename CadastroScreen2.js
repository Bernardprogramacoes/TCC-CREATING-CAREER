import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { UserContext } from '../../context/UserContext'; 
import { PhoneContext } from '../../context/PhoneContext'; 

export default function CadastroScreen2({ navigation, route }) {
  const { email, senha } = route.params;
  const { setNome } = useContext(UserContext);  
  const { setPhone } = useContext(PhoneContext); 

  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');  

  const formatPhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, ''); 
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/); 

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`; 
    }
    return number; 
  };

  
  const handlePhoneChange = (text) => {
    const formattedPhone = formatPhoneNumber(text);
    setTelefone(formattedPhone); 
    setPhone(formattedPhone); 
  };

  const areFieldsValid = () => {
    return cpf && cep && telefone && nomeUsuario;
  };

  const handleNext = () => {
    if (!areFieldsValid()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setNome(nomeUsuario);

    navigation.navigate('Cadastro3', { email, senha, cpf, cep, telefone, nomeUsuario });
  };

  const handleCadastrar = () => {
    if (!areFieldsValid()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Cadastro concluído com sucesso!");

    setNome(nomeUsuario);

    navigation.navigate('Login');
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
          placeholder="CPF"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={handlePhoneChange} 
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          placeholderTextColor="#aaa"
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Sou Estudante</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
});