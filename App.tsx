import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import BotButton from './Components/BotButton';
import Signup from './Screens/Sign-up';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
function App(): React.JSX.Element {

  return (
    <>
    <Navbar />
    </>
  );
}


export default App;
