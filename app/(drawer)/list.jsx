import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';


export default function List({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = () => {
      if (task.trim().length === 0) return;
      onAddTask('task');
      setTask('');
    };

    return(
        <SafeAreaView style={{ flex:1 }}>
            <Text style={styles.title}>List</Text>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={task}
            onChangeText={setTask}
            onSubmitEditing={handleSubmit}
            returnKeyType="Done"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'left',
    paddingLeft: 10,
    alignitems: 'flex-start',
  },
  input: {
    borderColor: '#1A1A1E',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 3,
  }
})