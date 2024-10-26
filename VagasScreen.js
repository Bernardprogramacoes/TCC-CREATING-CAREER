import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function VagasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Vagas Disponíveis</Text>
      </View>

      <ScrollView>
        
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.vagaCard}>
            <Image
              style={styles.vagaImage}
              source={{ uri: 'https://via.placeholder.com/150' }}
            />
            <View style={styles.vagaDetails}>
              <Text style={styles.vagaTitle}>Vaga {index + 1}</Text>
              <TouchableOpacity style={styles.enterButton}>
                <Text style={styles.enterButtonText}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, backgroundColor: '#e6e6e6' },
  title: { fontSize: 24, padding: 15 },
  vagaCard: { flexDirection: 'row', backgroundColor: '#fff', margin: 10, borderRadius: 10, padding: 10 },
  vagaImage: { width: 70, height: 70, borderRadius: 10 },
  vagaDetails: { marginLeft: 15 },
  vagaTitle: { fontSize: 16 },
  enterButton: { backgroundColor: '#007bff', borderRadius: 10, padding: 5, marginTop: 5 },
  enterButtonText: { color: '#fff' },
});
