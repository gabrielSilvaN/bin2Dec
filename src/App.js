import React, {useState} from 'react';
import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';

import styles from './style';

function App() {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [decimalNumber, setDecimalNumber] = useState(undefined);
  const [validInput, setValidInput] = useState(true);

  function convertBinToDec() {
    const isValid = /\b[0-1]{1,8}\b/.test(binaryNumber);

    if (!isValid) {
      setValidInput(false);
    } else {
      setDecimalNumber(parseInt(binaryNumber, 2));
      setValidInput(true);
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Bin2Dec Calculator</Text>

        <View style={styles.inputBlock}>
          <Text style={styles.label}>Binary Number</Text>
          <TextInput
            style={validInput ? styles.input : styles.invalidInput}
            keyboardType="number-pad"
            placeholder="Binary number here"
            onChangeText={(number) => setBinaryNumber(number.toString())}
          />
          <Text style={styles.errorText}>
            {!validInput ? 'Verifique os valores digitados!' : ''}
          </Text>
        </View>

        <View style={styles.inputBlock}>
          <Text style={styles.label}>Decimal Number</Text>
          <Text style={styles.input}>
            {validInput ? decimalNumber : 'Result Here'}
          </Text>
        </View>

        <TouchableOpacity onPress={convertBinToDec} style={styles.button}>
          <Text style={styles.textButton}>Convert!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default App;
