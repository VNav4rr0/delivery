import { TextInput, TextInputProps, StyleProp, TextStyle, View, Text } from "react-native"; 
import { styles } from '@/componente/input/styles'; // Import corrigido com chaves e minúsculo

type Props = TextInputProps & {
    placeholder: string;
    style?: StyleProp<TextStyle>; 
    errorMessage?: string; 
};

export default function Input({ style, errorMessage, ...rest }: Props) {
    return (
        <View style={{ marginBottom: 15 }}> 
            <TextInput
                style={[styles.input, style]} // Alterado para styles.input
                {...rest}
            />
            
            {errorMessage && (
                <Text style={styles.erroText}> {/* Alterado para styles.erroText */}
                    {errorMessage}
                </Text>
            )}
        </View>
    );
}