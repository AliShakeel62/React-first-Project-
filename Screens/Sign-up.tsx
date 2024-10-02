import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import BotButton from '../Components/BotButton';
import axios from 'axios';

export default function Signup() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [alerts, setalerts] = useState('');
  const [loading, setLoading] = useState(false); // New state for loader

  const signpost  = async () => {
    setLoading(true); // Start showing loader immediately after click

    // Simulating async process (API call)
  await  axios
      .post('https://back-end-with-mongo-db.vercel.app/auth/singup', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: Password,
      })
      .then((res) => {
        setLoading(false); // Stop showing loader after response
        if (res) {
          setalerts('Sign up Successfully');
        }
      })
      .catch((err) => {
        setLoading(false); // Stop showing loader in case of error
        console.log(err,"There was an issue with your signup. Please try again");
        setalerts(err? err : 'There was an issue with your signup. Please try again.');
      });
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white', display: 'flex' }}>
        <Text style={styles.title} >Sign up</Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="grey"
              onChangeText={setfirstname}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="grey"
              onChangeText={setlastname}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="grey"
              onChangeText={setemail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>

          {/* Show Loader if loading is true */}
          {loading && (
            <ActivityIndicator size="large" color="#9775FA" />
          )}

          {/* Sign up button */}
          <View style={styles.ButtonCon}>
            <BotButton text="Sign up" onPress={signpost} alerts={alerts} />
          </View>
        </View>
      </ScrollView>
    </>
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
    marginLeft: 120,
  },
  inputContainer: {
    marginTop: 5,
  },
  input: {
    height: 40,
    marginBottom: 10,
    width: 250,
    paddingLeft: 40,
    color: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    fontSize: 20,
  },
  ButtonCon: {
    marginTop: 10,
  },
});
