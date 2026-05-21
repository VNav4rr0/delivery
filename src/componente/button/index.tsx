import { 
  TouchableOpacity, 
  Text, 
  TouchableOpacityProps, 
  StyleProp, 
  ViewStyle 
} from "react-native";
import { styles } from "@/componente/button/style";

type Props = TouchableOpacityProps & {
    title: string; 
    style?: StyleProp<ViewStyle>;
}

export default function Button({ title, style, ...rest }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.button, style]} 
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}