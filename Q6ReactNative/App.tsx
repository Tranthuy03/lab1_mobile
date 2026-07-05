import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  const [number, setNumber] = useState("");
  const [digitResult, setDigitResult] = useState("");

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [minResult, setMinResult] = useState("");

  const [hailNumber, setHailNumber] = useState("");
  const [hailResult, setHailResult] = useState("");

  const updateInfo = () => {
    Alert.alert("Update Success");
  };

  const calculateDigits = () => {
    const text = number.trim();
    const first = Number(text[0]);
    const last = Number(text[text.length - 1]);
    setDigitResult(`First digit = ${first}\nLast digit = ${last}\nResult = ${first + last}`);
  };

  const findMinimum = () => {
    const min = Math.min(Number(a), Number(b), Number(c));
    setMinResult(`Minimum = ${min}`);
  };

  const generateHailstone = () => {
    let n = Number(hailNumber);
    const result = [];

    while (n >= 1) {
      result.push(n);
      if (n === 1) break;

      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }

    setHailResult(result.join(" → "));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Question 6</Text>

      <Text style={styles.section}>1. Employee Information</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Occupation" value={occupation} onChangeText={setOccupation} />
      <Button title="Update" onPress={updateInfo} />

      <Text style={styles.section}>Sum First Digit and Last Digit</Text>
      <TextInput style={styles.input} placeholder="Enter number" value={number} onChangeText={setNumber} keyboardType="numeric" />
      <Button title="Calculate" onPress={calculateDigits} />
      <Text style={styles.result}>{digitResult}</Text>

      <Text style={styles.section}>2. Find Minimum of Three Numbers</Text>
      <TextInput style={styles.input} placeholder="Number A" value={a} onChangeText={setA} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Number B" value={b} onChangeText={setB} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Number C" value={c} onChangeText={setC} keyboardType="numeric" />
      <Button title="Find Minimum" onPress={findMinimum} />
      <Text style={styles.result}>{minResult}</Text>

      <Text style={styles.section}>3. Hailstone Sequence</Text>
      <TextInput style={styles.input} placeholder="Enter positive number" value={hailNumber} onChangeText={setHailNumber} keyboardType="numeric" />
      <Button title="Hailstone" onPress={generateHailstone} />
      <Text style={styles.result}>{hailResult}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
});