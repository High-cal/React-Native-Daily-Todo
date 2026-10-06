import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, TextInput } from 'react-native';


export default function List() {
    return(
        <SafeAreaView style={{ flex:1 }}>
            <Text style={styles.title}>List</Text>
            <TextInput style={styles.input} placeholder="Add a new task..." />
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