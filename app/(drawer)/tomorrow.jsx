import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Tomorrow() {
    return(
        <SafeAreaView style={{ flex:1 }}>
            <Text style={styles.title}>Tomorrow</Text>
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
})