import {
  Flex,
  Text,
  Avatar,
  Checkbox,
  Box,
  Button,
  VStack,
  Heading,
  HStack,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { UsersThree, Stool } from '@phosphor-icons/react';
import { junge } from '@/assets/fonts';

const Convite: React.FC = () => {
  return (
    <Container height='100dvh' p={8} borderWidth={1}>
      <VStack justifyContent='space-between' height='full'>
        <VStack alignItems='center' height='full' width='full' gap={8}>
          <Heading style={junge.style}>Luana e Paulo</Heading>

          <HStack
            width='100%'
            justifyContent='space-between'
            alignItems='center'
            fontSize='medium'
          >
            <HStack alignItems='center'>
              <UsersThree />
              <Text style={junge.style}>Familia - Noivo</Text>
            </HStack>
            <HStack alignItems='center'>
              <Text style={junge.style}>Mesa - Pais</Text>
              <Stool />
            </HStack>
          </HStack>

          <VStack width='100%'>
            <Flex
              justifyContent='space-between'
              width='100%'
              alignItems='center'
            >
              <HStack alignItems='center' gap={4}>
                <Avatar />
                <VStack alignItems='start'>
                  <Text style={junge.style}>Elzimare Oliveira</Text>
                  <Text style={junge.style}>Mãe</Text>
                </VStack>
              </HStack>
              <Box>
                <Checkbox defaultChecked={true} />
              </Box>
            </Flex>
          </VStack>
        </VStack>

        <Box width='100%'>
          <Button width='full' size='lg' colorScheme='purple'>
            Confirmar
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Convite;
