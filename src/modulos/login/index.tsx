import {Button, Flex, Stack} from '@chakra-ui/react' 
import { FormEvent, useContext, useState } from 'react';
import { Input } from '../../componente/Login/Input';
import { AutenticacaoContext } from '../../context/autenticacao';


const PageLogin = () => {

    const {autenticado, login} = useContext(AutenticacaoContext);
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        login (user,senha);
        console.log(user, senha)
};  
    return (
        <Flex w="100vw" h="100vh" justify='center' align='center' bg='#2C2C57' flexDir='column' onSubmit={handleSubmit}>
            
            <Flex as="form" w="100%"  maxWidth={360} bg="#454587" p="8" borderRadius={8} flexDir="column"> 
                <Stack spacing='4' fontSize='20'>
                        <Input label='Usuario' placeholder='Digite seu Usuario' name='user' type='text' onChange={(e) => setUser(e.target.value)}/>
                        <Input label='Senha' name='senha' type='password'  placeholder='Digite sua Senha' onChange={(e) => setSenha(e.target.value)}/>
                </Stack>
                <Button type="submit" mt="10" colorScheme="purple" >Acessar ao sistema</Button>
                <p>{String(autenticado)}</p>
            </Flex>
        </Flex>
        
        
    )
}
export default PageLogin;