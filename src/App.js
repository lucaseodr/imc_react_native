import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      Alert.alert('Você esta abaixo do peso! ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      Alert.alert('Peso ideal! ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      Alert.alert('Levemente acima do peso! ' + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC!</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(val) => setPeso(val)}
        placeholder="Peso (kg)"
        placeholderTextColor="#626780"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(val) => setAltura(val)}
        placeholder="Altura (cm)"
        placeholderTextColor="#626780"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21222C',
  },
  title: {
    marginTop: 15,
    color: '#eee',
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#282A36',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#eee',
    fontSize: 22,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    backgroundColor: '#282A36',
    borderRadius: 5,
  },
  buttonText: {
    color: '#eee',
    fontSize: 18,
  },
});
