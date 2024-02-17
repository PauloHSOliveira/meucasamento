import { Flex, Text, Avatar, Checkbox, Box, Button } from '@radix-ui/themes';
import React from 'react';
import { UsersThree, Stool } from '@phosphor-icons/react';

import { Junge } from 'next/font/google';

const junge = Junge({ weight: '400', subsets: ['latin'] });

// import { Container } from './styles';

const Convite: React.FC = () => {
  return (
    <Flex
      justify='between'
      p='6'
      direction='column'
      height='100%'
      className={junge.className}
    >
      <Flex direction='column' align='center' gap='4'>
        <Text size='8'>Luana e Paulo</Text>

        <Flex width='100%' justify='between' align='center'>
          <Flex align='center' gap='1'>
            <UsersThree />
            <Text>Familia - Noivo</Text>
          </Flex>
          <Flex align='center' gap='1'>
            <Text>Mesa - Pais</Text>
            <Stool />
          </Flex>
        </Flex>

        <Flex direction='column' width='100%' mt='6'>
          <Flex justify='between' width='100%' align='center'>
            <Flex gap='2' align='center'>
              <Avatar size='5' fallback='EO' />
              <Flex direction='column'>
                <Text>Elzimare Oliveira</Text>
                <Text>Mãe</Text>
              </Flex>
            </Flex>
            <Box>
              <Checkbox size='3' defaultChecked={true} />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box width='100%'>
        <Button style={{ width: '100%' }} size='4'>
          Confirmar
        </Button>
      </Box>
    </Flex>
  );
};

export default Convite;
