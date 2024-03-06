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
import { Ticket, UsersThree, Heart } from '@phosphor-icons/react';
import { junge } from '@/assets/fonts';
import Link from 'next/link';

const sidebarItems = [
  {
    label: 'Convidados',
    path: '/admin/meucasamento/convidados',
    icon: <Ticket size={24} />,
    routeName: 'invites',
  },
  {
    label: 'Familias',
    path: '/admin/meucasamento/familias',
    icon: <UsersThree size={24} />,
    routeName: 'families',
  },
];

const Sidebar = ({ activeRoute }: { activeRoute: 'families' | 'invites' }) => {
  const sidebarWidth = useBreakpointValue({ base: '60px', md: '300px' });

  return (
    <Box
      as='nav'
      width={sidebarWidth}
      overflow='auto'
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
      </Flex>
      <Stack spacing={4} p={4}>
        {sidebarItems.map((item) => (
          <Box
            key={item.path}
            borderWidth={activeRoute === item.routeName ? 1 : 0}
            borderColor='red'
            padding={2}
            borderRadius='lg'
          >
            <Link href={item.path}>
              <HStack>
                {item.icon}
                <Text>{item.label}</Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
