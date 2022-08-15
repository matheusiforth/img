import { Button, Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Header(){
    return(
        <Flex >
            <Flex as="label" flex='1' py='2' px='4' ml='6' maxWidth={300} bg='#2C2C57' borderRadius='full'>
                <Input h='7' w='30' bg='#2C2C57' borderColor='#2C2C57'></Input>
                <Icon as={RiSearchLine} fontSize='20' cursor='pointer' m='auto'/>
            </Flex>
        </Flex>
    )
}