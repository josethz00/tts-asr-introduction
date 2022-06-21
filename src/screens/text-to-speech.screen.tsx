import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import * as Speech from 'expo-speech';

export default function TextToSpeechScreen(): JSX.Element {
  const [iptValue, setIptValue] = useState<string>('');
  
  function speak (): void {
    const thingToSay = iptValue;
    Speech.speak(thingToSay, {
      language: 'pt-BR',
    });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type something..." value={iptValue} onChangeText={(text) => setIptValue(text)} />
      <Button title="Listen" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  }
});
