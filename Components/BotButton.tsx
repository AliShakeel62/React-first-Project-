import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function BotButton(props: any): React.JSX.Element {
  const { text, onPress } = props;

  const handlePress = () => {
    onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 30,
  },
  customButton: {
    backgroundColor: '#9775FA',
    borderRadius: 30,
    paddingVertical: 19,
    paddingHorizontal: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
