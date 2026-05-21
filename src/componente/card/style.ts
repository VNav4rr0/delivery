import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#009c3b', // Verde Canarinho / Copa do Mundo
        width: '90%',
        maxWidth: 400,
        borderRadius: 20,
        padding: 24,
        borderWidth: 4,
        borderColor: '#ffdf00', // Borda Amarela Ouro
        elevation: 8,
        shadowColor: '#002776', // Sombra Azul da nossa bandeira
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        position: 'relative',
        overflow: 'hidden',
    },
    title: {
        fontSize: 28,
        fontWeight: '900', 
        color: '#ffdf00', 
        textTransform: 'uppercase',
        letterSpacing: 2,
        textAlign: 'center',
        marginBottom: 4,
        textShadowColor: '#002776', 
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    backgroundNumber10: {
        position: 'absolute',
        right: -10,
        bottom: -30,
        fontSize: 130,
        fontWeight: '900',
        color: 'rgba(255, 223, 0, 0.12)', 
        fontStyle: 'italic',
        userSelect: 'none', 
    },
    easterEggText: {
        fontSize: 14,
        color: '#ffdf00',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        fontStyle: 'italic',
        backgroundColor: '#002776', 
        padding: 6,
        borderRadius: 8,
    }
});