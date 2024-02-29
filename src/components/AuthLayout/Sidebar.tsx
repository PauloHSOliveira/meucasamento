import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Heading,
  //   IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { X, UsersThree, Heart } from '@phosphor-icons/react';
import { junge } from '@/assets/fonts';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarWidth = useBreakpointValue({ base: '60px', md: '300px' });

  return (
    <Box
      as='nav'
      width={sidebarWidth}
      overflow='auto'
      transition='width 0.2s ease'
      height='full'
      borderWidth={1}
    >
      <Flex align='center' justify='space-between' p={4}>
        <HStack>
          <Heading fontSize='xl' style={junge.style}>
            Meu Casamento
          </Heading>
          <Heart size={30} color='red' />
        </HStack>
        {/* <IconButton
          icon={<X />}
          onClick={toggleSidebar}
          aria-label='Toggle Sidebar'
        /> */}
      </Flex>
      <Stack spacing={4} p={4}>
        <Link href='/admin/meucasamento/convidados'>
          <HStack>
            <UsersThree size={24} />
            <Text>Convidados</Text>
          </HStack>
        </Link>
      </Stack>
    </Box>
  );
};

export default Sidebar;
