import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#002776',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        fontWeight: '600',
        color: '#002776',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    erroText: {
        color: '#ffdf00',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 6,
        paddingLeft: 4,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(0,0,0,0.6)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    }
});