import { View, StyleSheet } from 'react-native';
import { Card } from '../componente/card';

export default function Index() {
    return (
        <View style={styles.container}>
            <Card />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#002776', // Azul oficial da bandeira
        flex: 1,
        padding: 24,
        justifyContent: 'center', // Centraliza o card verticalmente na tela
        alignItems: 'center', // Centraliza o card horizontalmente
    }
});