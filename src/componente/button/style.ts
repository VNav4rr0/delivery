import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffdf00', // Amarelo Ouro
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#002776', // Detalhe em Azul Bic
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginTop: 10,
    },
    buttonText: {
        color: '#002776', // Texto em Azul
        fontSize: 16,
        fontWeight: '900', // Bem destacado estilo numeração de camisa
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});