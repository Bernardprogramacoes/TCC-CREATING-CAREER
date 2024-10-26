import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, StatusBar, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../context/UserContext';  
import { EmailContext } from '../../context/EmailContext';
import { PhoneContext } from '../../context/PhoneContext'; 

export default function Perfil({ navigation }) {
  const { nome } = useContext(UserContext);  
  const { email } = useContext(EmailContext); 
  const { phone } = useContext(PhoneContext);

  const [profileData, setProfileData] = useState([
    { id: '1', title: 'Aluno na ETEC - Escola Técnica Estadual de São Paulo', location: 'ETEC - Escola Técnica Estadual de São Paulo Taboão da Serra, São Paulo, Brasil' },
  ]);
  const [newInfo, setNewInfo] = useState('');

  const addNewCard = () => {
    if (newInfo.trim()) {
      const newCard = {
        id: Math.random().toString(),
        title: newInfo,
        location: 'Adicionado pelo usuário',
      };
      setProfileData([...profileData, newCard]);
      setNewInfo('');
    }
  };

  const removeCard = (id) => {
    setProfileData(profileData.filter(card => card.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}> 
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/150' }} 
        />

        <Text style={styles.name}>{nome || 'Usuário'}</Text>
      </View>

      <View style={styles.divider} />

      <FlatList
        data={profileData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
            
            <TouchableOpacity onPress={() => removeCard(item.id)} style={styles.deleteButton}>
              <Icon name="trash" size={20} color="#fff" />
              <Text style={styles.deleteButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.addCardSection}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar nova informação"
          value={newInfo}
          onChangeText={setNewInfo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNewCard}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.contactInfo}>
        <Icon name="envelope" size={16} />  {email || 'E-mail não cadastrado'}
        </Text>
         <Text style={styles.contactInfo}>
            <Icon name="phone" size={16} /> {phone} 
          </Text>
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
  header: {
    backgroundColor: '#0c0a3e', 
    padding: 15,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10, 
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1, 
  },
  profileInfo: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6f1ff', 
  },
  profileImage: {
    width: 120, 
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff', 
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc', 
    marginHorizontal: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f9f9f9', 
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0c0a3e', 
    marginBottom: 5,
    textAlign: 'center',
  },
  location: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0c0a3e', 
  },
  contactInfo: {
    fontSize: 16,
    marginVertical: 5,
    color: '#0c0a3e', 
  },
  addCardSection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#0c0a3e',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});