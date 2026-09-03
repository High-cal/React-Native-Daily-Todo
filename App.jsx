import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Todo</Text>
      <Text style={styles.message}>Open App.jsx to start working on your app!</Text>
      <Text style={styles.status}>Expo template loaded</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  message: {
    textAlign: 'center',
  },
  status: {
    color: '#666',
    marginTop: 12,
  },
});
