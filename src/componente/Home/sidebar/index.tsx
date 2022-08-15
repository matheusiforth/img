import { Box, Flex, Stack, Text, Link } from "@chakra-ui/react";

export function Sidebar(){
    return(
        <Box as='aside' w='64'>
            <Stack spacing='12' align='flex-start'>
                <Box>
                    <Text fontWeight='bold' color='black' fontSize='small'>Geral</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                           <Link display='flex'>
                                <Text color='black' ml='4' fontWeight='medium'>Menu inicial</Text>
                                <Text color='black' ml='4' fontWeight='medium'>Menu Item</Text>
                           </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}