import React, { useState, useRef, useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Animated, 
  Easing, 
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { UserContext } from '../../context/UserContext';

export default function HomeScreen({ navigation }) {
  const { nome } = useContext(UserContext); 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(-250)).current;

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      Animated.timing(drawerAnimation, {
        toValue: -250,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start(() => setIsDrawerOpen(false));
    } else {
      setIsDrawerOpen(true);
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="#0c0a3e" 
        translucent={false} 
      />

      {isDrawerOpen && (
        <TouchableOpacity style={styles.overlay} onPress={toggleDrawer}>
        </TouchableOpacity>
      )}

      <Animated.View style={[styles.drawer, { left: drawerAnimation }]}>
      <View style={styles.profileSection}>
        <Icon name="user-circle" size={50} color="#0c0a3e" />
        <Text style={styles.profileName}>{nome || 'Usuário'}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.viewProfile}>Ver perfil</Text>
        </TouchableOpacity>
      </View>
    

        <View style={styles.divider} />

        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Materiais')}>
          <Text style={styles.drawerText}>Materiais de Apoio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Notificacoes')}>
          <Text style={styles.drawerText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Comunidade')}>
          <Text style={styles.drawerText}>Comunidade</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.premiumSection}>
          <Text style={styles.premiumTitle}>Área Premium</Text>

          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('PremiumBlocked')}>
            <Text style={styles.drawerText}>Cursos (Premium)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('PremiumBlocked')}>
            <Text style={styles.drawerText}>Outros Recursos (Premium)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Configuracoes')}>
          <Icon name="cog" size={24} color="#0c0a3e" />
          <Text style={styles.drawerText}>Configurações</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.topBar}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuIcon}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Tela Inicial</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.logoutIcon}>
          <Feather name="log-out" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/Card.png')} style={styles.appImage} />
        </View>

        <View style={styles.divider} />

        <View style={styles.materialsContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabActive}>
              <Icon name="book" size={16} color="#fff" style={styles.tabIcon} />
              <Text style={styles.tabText}>Materiais de apoio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabInactive}>
              <Text style={styles.tabText}>Premium</Text>
              <Icon name="lock" size={16} color="#888" style={styles.tabIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.cardBackground}>
            <View style={styles.miniCard}>
              <Icon name="file-text" size={20} color="#333" style={styles.miniCardIcon} />
              <Text style={styles.miniCardText}>Como montar seu currículo</Text>
              <TouchableOpacity 
                style={styles.viewButton} 
                onPress={() => navigation.navigate('Curriculo')}>
                <Text style={styles.viewButtonText}>ver</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <View style={styles.miniCard}>
              <Icon name="user-check" size={20} color="#333" style={styles.miniCardIcon} />
              <Text style={styles.miniCardText}>Como se portar em uma entrevista de emprego</Text>
              <TouchableOpacity 
                style={styles.viewButton} 
                onPress={() => navigation.navigate('Entrevista')}>
                <Text style={styles.viewButtonText}>ver</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <View style={styles.miniCard}>
              <Icon name="briefcase" size={20} color="#333" style={styles.miniCardIcon} />
              <Text style={styles.miniCardText}>Como montar uma carta de apresentação</Text>
              <TouchableOpacity 
                style={styles.viewButton} 
                onPress={() => navigation.navigate('CartaDeApresentacao')}>
                <Text style={styles.viewButtonText}>ver</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.messageCard}>
            <Text style={styles.infoText}>
              Por aqui você pode acessar com mais facilidade os nossos materiais mais acessados.
            </Text>
          </View>
        </View>
        <View style={styles.dividerCard} />
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#fff" />
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
    backgroundColor: '#f8f8f8',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#0c0a3e',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  menuIcon: {
    padding: 10,
  },

  logoutIcon: {
    padding: 10,
  },

  scrollContent: {
    paddingTop: 10,
    alignItems: 'center',
    paddingBottom: 20,
  },

  imageContainer: {
  width: '100%', 
  alignItems: 'center',
  },

  appImage: {
  width: '100%', 
  height: 200, 
  resizeMode: 'cover', 
  },

  tabContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between', 
  width: '100%',
  paddingBottom: 10,
  paddingHorizontal: 16,  
  },

  tabActive: {
  flex: 1,
  backgroundColor: '#0c0a3e',
  padding: 10,
  borderRadius: 20,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  marginRight: 8, 
  },

  tabInactive: {
  flex: 1,
  backgroundColor: '#ddd',
  padding: 10,
  borderRadius: 20,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  marginLeft: 8, 
  },

  tabText: {
    fontSize: 16,
    color: '#fff',
  },

  tabIcon: {
    marginRight: 8, 
  },

  cardBackground: {
    backgroundColor: '#f8f8f8', 
    padding: 10,
    borderRadius: 10,
  },

  miniCard: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: 15,
  marginBottom: 10,
  borderRadius: 8,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  marginHorizontal: 16,  
  },

  miniCardText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },

  miniCardIcon: {
    marginRight: 10, 
  },

  viewButton: {
    backgroundColor: '#0c0a3e',
    padding: 8,
    borderRadius: 10,
  },

  viewButtonText: {
    color: '#fff',
    fontSize: 14,
  },

  infoText: {
  fontSize: 14, 
  color: '#fff', 
  marginTop: 5,
  textAlign: 'center',
  },

  dividerCard: {
  height: 1,
  backgroundColor: '#ddd',
  marginVertical: 15,
  width: '80%', 
  alignSelf: 'center', 
  },

  drawer: {
    width: 250,
    height: '100%',
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingLeft: 20,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    zIndex: 10,
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  profileName: {
    fontSize: 18,
    color: '#0c0a3e',
    marginVertical: 10,
  },

  viewProfile: {
    color: '#0c0a3e',
    textDecorationLine: 'underline',
  },

  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  drawerText: {
    fontSize: 16,
    color: '#0c0a3e',
    marginLeft: 10,
  },
  divider: {
  height: 1,
  backgroundColor: '#ccc',
  marginVertical: 10,
  width: '80%', 
  alignSelf: 'center', 
  },

  premiumSection: {
    marginTop: 20,
  },

  premiumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c0a3e',
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 5,
  },

  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0c0a3e',
    padding: 10,
  },

  menuItem: {
    alignItems: 'center',
  },

  menuText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },

   messageCard: {
  backgroundColor: '#0c0a3e',
  padding: 15,
  borderRadius: 10,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  marginHorizontal: 16, 
  },

  headerTitle: {
  fontSize: 18,
  color: '#fff',
  fontWeight: 'bold',
  flex: 1, 
  textAlign: 'center',
  marginTop: 10, 
},
});