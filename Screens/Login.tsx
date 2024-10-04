import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup() {
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  axios.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('authorization');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  const signpost = () => {
    setLoading(true);
    axios.post('https://back-end-with-mongo-db.vercel.app/auth/login', {
      email: email,
      password: Password,
    })
      .then(async (res) => {
        setLoading(false);
        if (res && res.data && res.data.token) {
          await AsyncStorage.setItem('authorization', res.data.token);
          Alert.alert("Login successfully");
          console.warn(res.data.token);  // Print token to console
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        Alert.alert("Login failed");
      });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white', display: 'flex' }}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor="grey"
            onChangeText={setemail}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor="grey"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={styles.ButtonCon}>
        {loading ? (
          <ActivityIndicator size="large" color="#9775FA" />
        ) : (
          <TouchableOpacity style={styles.customButton} onPress={signpost}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: '700',
    paddingTop: 110,
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 75,
  },
  input: {
    height: 40,
    marginBottom: 10,
    width: 270,
    paddingLeft: 40,
    color: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    fontSize: 20,
  },
  ButtonCon: {
    marginTop: 297,
    height: "100%",
  },
  customButton: {
    backgroundColor: '#9775FA',
    paddingVertical: 15,
    paddingHorizontal: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
