import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { Provider as PaperProvider } from 'react-native-paper';

import CadastroScreen1 from './telas/cadastro/CadastroScreen1';
import CadastroScreen2 from './telas/cadastro/CadastroScreen2';
import CadastroScreen3 from './telas/cadastro/CadastroScreen3';
import LoginScreen from './telas/cadastro/LoginScreen';
import HomeScreen from './telas/inicio/HomeScreen';
import MateriaisScreen from './telas/menuvertical/MateriaisScreen';
import CursosScreen from './telas/materiaisdeapoio/CursosScreen';
import VagasScreen from './telas/materiaisdeapoio/VagasScreen';
import CurriculoScreen from './telas/materiaisdeapoio/CurriculoScreen';
import ModelosCurriculo from './telas/materiaisdeapoio/ModelosCurriculo';
import EntrevistaScreen from './telas/materiaisdeapoio/EntrevistaScreen';
import ConfiguracoesScreen from './telas/menuvertical/ConfiguracoesScreen';
import NotificacoesScreen from './telas/menuinferior/NotificacoesScreen';
import CartaDeApresentacaoScreen from './telas/materiaisdeapoio/cartadeapresentacao';
import Comunidade from './telas/menuinferior/Comunidade';
import Premium from './telas/menuinferior/PremiumBlocked';
import Perfil from './telas/menuvertical/perfil';
import ContaSeguranca from './telas/configuracoes/ContaSeguranca';
import EnderecoScreen from './telas/configuracoes/EnderecoScreen';
import ConfiguracaoNotificacaoScreen from './telas/configuracoes/ConfiguracaoNotificacao';
import ConfiguracaoSistemaScreen from './telas/configuracoes/ConfiguracaoSistema';
import CentralDeAjudaScreen from './telas/configuracoes/centraldeajuda';
import PoliticaScreen from './telas/configuracoes/Politica';
import ModoScreen from './telas/configuracoes/ModoScreen';
import { ThemeProvider, useTheme } from './theme/themescontext';
import { UserProvider } from './context/UserContext';
import { EmailProvider } from './context/EmailContext';
import { PhoneProvider } from './context/PhoneContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Materiais"
        component={MateriaisScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Cursos"
        component={CursosScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Vagas"
        component={VagasScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notificacoes') {
            iconName = 'bell';
          } else if (route.name === 'Materiais') {
            iconName = 'book';
          } else if (route.name === 'Cursos') {
            iconName = 'list';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#0c0a3e',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notificacoes"
        component={NotificacoesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Materiais"
        component={MateriaisScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cursos"
        component={CursosScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PhoneProvider>
    <UserProvider>
      <EmailProvider> 
        <ThemeProvider>
          <AppWithTheme />
        </ThemeProvider>
      </EmailProvider>
    </UserProvider>
    </PhoneProvider>
  );
}

function AppWithTheme() {
  const { theme } = useTheme(); 

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cadastro1">
          <Stack.Screen
            name="Cadastro1"
            component={CadastroScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro2"
            component={CadastroScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro3"
            component={CadastroScreen3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainDrawer"
            component={MainDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Curriculo"
            component={CurriculoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModelosCurriculo"
            component={ModelosCurriculo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Entrevista"
            component={EntrevistaScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Configuracoes"
            component={ConfiguracoesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CartaDeApresentacao"
            component={CartaDeApresentacaoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notificacoes"
            component={NotificacoesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Comunidade"
            component={Comunidade}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PremiumBlocked"
            component={Premium}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContaSeguranca"
            component={ContaSeguranca}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Endereco"
            component={EnderecoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfiguracaoNotificacao"
            component={ConfiguracaoNotificacaoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfiguracaoSistema"
            component={ConfiguracaoSistemaScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CentralDeAjuda"
            component={CentralDeAjudaScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Politica"
            component={PoliticaScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Modo"
            component={ModoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MateriaisScreen"
            component={MateriaisScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
