import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="add a new task" />
        <Button title='Add' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    borderBottomColor: '#010101',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121'
  },
});
