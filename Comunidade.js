import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Platform  } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { EmailContext } from '../../context/EmailContext'; 

export default function Comunidade({ navigation }) {
  const { email } = useContext(EmailContext); 
  const [comments, setComments] = useState([
    { user: 'andre_silva@gmail.com', text: 'Adorei o Aplicativo! Bastante Eficaz.' },
    { user: 'Juliamedeiros@yahoo.com', text: 'Muito prático e fácil de usar!' },
    { user: 'pedrosantos@outlook.com', text: 'Funciona perfeitamente para o que eu preciso.' },
  ]);

  const [newComment, setNewComment] = useState('');

  
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: email || 'voce@exemplo.com', text: newComment }]);
      setNewComment(''); 
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Compartilhe com as pessoas a sua experiência:</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {comments.map((comment, index) => (
          <View key={index} style={styles.commentCard}>
            <Feather name="user" size={30} color="#007bff" />
            <View style={styles.commentContent}>
              <Text style={styles.commentUser}>{comment.user}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      
      <View style={styles.commentInputSection}>
        <TextInput
          style={styles.commentInput}
          placeholder="Deixe seu comentário"
          placeholderTextColor="#999"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
          <Text style={styles.commentButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
  },
  topBar: {
    backgroundColor: '#0c0a3e',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 150, 
  },
  commentCard: {
    flexDirection: 'row',
    backgroundColor: '#e0f0ff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  commentContent: {
    marginLeft: 10,
    flex: 1,
  },
  commentUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
  commentInputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f1f1',
    position: 'absolute',
    bottom: 60, 
    left: 0,
    right: 0,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  commentButton: {
    backgroundColor: '#0c0a3e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0c0a3e', 
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});