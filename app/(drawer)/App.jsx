import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const onPress = () => {
    Alert.alert('not lagging');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search Bar</Text>
      <Text style={styles.title}>Daily Todo</Text>
      <Text style={styles.message}>Open App.jsx to start working on your app!</Text>
      <Button onPress={onPress} title="I am A test"/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
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
