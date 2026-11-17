import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import TaskItem from '../../components'
import { useTasks } from '../../context/TaskContext'


export default function List() {
    const [task, setTask] = useState('');
    const { tasks, addTask, editTask, deleteTask } = useTasks();

    const handleSubmit = () => {
      if (task.trim().length === 0) return;
      addTask(task.trim());
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
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TaskItem task={item} onEdit={editTask} onDelete={deleteTask}/>
              )}
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