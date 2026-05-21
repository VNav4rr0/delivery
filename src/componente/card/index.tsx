import { View, Text } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router'; 
import Button from '../button/index';
import Input from '@/componente/input/index';

import { styles } from '@/componente/card/style'; 

export const Card = () => {
    const router = useRouter(); 
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erroEmail, setErroEmail] = useState(''); 
    const [erroSenha, setErroSenha] = useState('');

    function handleLogin() {
        let possuiErro = false;

        const usuarioDigitado = email.trim().toLowerCase();
        const senhaDigitada = password.trim();

        if (!email) {
            setErroEmail('O usuário é obrigatório!');
            possuiErro = true;
        } else if (usuarioDigitado !== 'neyma') { 
            setErroEmail('Usuário incorreto!');
            possuiErro = true;
        } else {
            setErroEmail('');
        }

        if (!password) {
            setErroSenha('A senha é obrigatória!');
            possuiErro = true;
        } else if (senhaDigitada !== 'vaibrasil') { 
            setErroSenha('Senha incorreta!');
            possuiErro = true;
        } else {
            setErroSenha('');
        }

        if (!possuiErro) {
            console.log('Login efetuado com sucesso!');
            router.replace('/dashboard'); 
        }
    }

    return (
        <View style={styles.card}>
            <Text style={styles.backgroundNumber10}>10</Text>

            <Text style={styles.title}>Brasil</Text>
            <Text style={styles.subtitle}>Rumo ao Hexa • WC 2026</Text>
            
            <Input
                placeholder='Digite seu Usuário'
                placeholderTextColor="rgba(255,255,255,0.6)"
                onChangeText={(texto) => {
                    setEmail(texto);
                    if (erroEmail) setErroEmail(''); 
                }}
                value={email}
                errorMessage={erroEmail} 
                style={{ backgroundColor: '#fff', color: '#333' }}
            />
            
            <Input 
                placeholder='Digite sua Senha' 
                placeholderTextColor="rgba(255,255,255,0.6)"
                onChangeText={(texto) => {
                    setPassword(texto);
                    if (erroSenha) setErroSenha('');
                }}
                value={password}
                errorMessage={erroSenha}
                secureTextEntry={true} 
                style={{ backgroundColor: '#fff', color: '#333' }}
            />
            
            <Button title="SUBILINHE NA DIAGONAL" onPress={handleLogin} />

            {email.trim().toLowerCase() === 'neyma' && (
                <Text style={styles.easterEggText}>
                    🚀 "O pai tá on e roteando!"
                </Text>
            )}
        </View>
    );
};