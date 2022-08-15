import { Flex, Input } from "@chakra-ui/react";
import { Header } from "../../componente/Home/Header";
import { Sidebar } from "../../componente/Home/sidebar";

export default function Home() {
    return (
        <Flex w="100vw" h="100vh" bg='#2C2C57'>
            <Flex as="header" w='100%' h='20' mx='auto' px='6' align='center' bg='white'>
                    <Sidebar />
               <Header />
            </Flex>
        </Flex>
    )
}