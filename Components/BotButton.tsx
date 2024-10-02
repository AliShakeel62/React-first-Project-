// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Button,
//     Alert,
//     ImageBackground,
//     ScrollView,
//   } from 'react-native';
//   type props ={
//     title:String,
//     Color:String,
//   }
// export default function BotButton(props : props) {
//    const {title,Color} = props
//    return (<>
// <Button  title={title} color={Color} />
//     </>)
// }
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function BotButton(props: any): React.JSX.Element {
  const { text, onPress, alerts } = props;

  const handlePress = () => {
    // Always call the onPress function immediately when the button is clicked
    onPress();
    
    // If there's an alert, show it
    if (alerts) {
      Alert.alert(alerts);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    width: 385,
    height: 60,
    textAlign: 'center',
    backgroundColor: '#9775FA',
    paddingBottom: 20,
    paddingTop: 10,
  },
});
