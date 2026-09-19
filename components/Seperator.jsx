import { View, StyleSheet} from 'react-native';

const Seperator = () => {
    return <View style={styles.seperator} />
};

const styles = StyleSheet.create({
    seperator: {
        height: 1,
        backgroundColor: '#1A1A1E',
        marginVertical: 1,
    },
});

export default Seperator;