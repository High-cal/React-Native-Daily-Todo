import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert, FlatList, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Seperator from '../../components/seperator';
import List from './list';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), text}
    ]); 
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  };

  const onPress = () => {
    Alert.alert('not lagging');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Daily Todo</Text>
      <Seperator />
      <List onAddTask={addTask}/>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text onPress={() => deleteTask(item.id)} style={styles.taskItem}>
            {item.text}
          </Text>
        )}
      />
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
    alignitems: 'flex-start',
  },
  message: {
    textAlign: 'center',
  },
});
