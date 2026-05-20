import { 
  TouchableOpacity, 
  Text, 
  TouchableOpacityProps, 
  StyleProp, 
  ViewStyle 
} from "react-native";
import { Style } from "../button/style";

type Props = TouchableOpacityProps & {
    title: string; 
    style?: StyleProp<ViewStyle>;
}

export default function Button({ title, style, ...rest }: Props) {
    return (
        <TouchableOpacity 
        style={[Style.button, style]} 
        {...rest}>
        <Text>{title}</Text>
        </TouchableOpacity>
    );
}