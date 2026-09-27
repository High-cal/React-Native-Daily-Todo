import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Seperator from '../../components/seperator';

export default function App() {
  const onPress = () => {
    Alert.alert('not lagging');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Daily Todo</Text>
      <Seperator />
      <Text></Text>
      <Button onPress={onPress} title="I am A test"/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'left',
    paddingLeft: 10,
  },
  message: {
    textAlign: 'center',
  },
});
