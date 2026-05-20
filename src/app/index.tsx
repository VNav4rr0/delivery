import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../componente/card';


export default function Index() {
    return (
        <View style={styles.container}>
        <Card/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        flex: 1,
        padding: 32,
        justifyContent: 'flex-start',
        alignItems:'center',
        gap: 16,
    },
    text: {
        color: '#FFF',
    }
});