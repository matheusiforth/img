import { FormLabel, Icon, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'
                        //ATENÇÃO                 //!!!!!!!!!!!!!!!!!

interface InputProps extends ChakraInputProps{
    name: string;
    label?:string;
}

export function Input({name, label, ...rest}: InputProps) {
 return(
    <div> 
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput 
            name="text" 
            type="text" 
            id="text" //htmlfor="email" -> pra qual input ela pertence? para o input email, entao tem que colocar o id no input tambem
            focusBorderColor="purple.500"
            bgColor="white"
            variant="filled" //sem borda, apenas a cor de fundo quando nao focado/clicado
            color="black"
            _placeholder={{color:'black'}}
            _hover={{bgColor: 'white', borderColor: 'purple.500'}} 
            _focus={{bgColor: 'white'}}
            size="lg"
            {...rest}
        />
    </div>
 )   
}