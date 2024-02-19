import { junge, poppins } from '@/assets/fonts';
import DataTable from '@/components/DataTable/DataTable';
import { Box, Flex, Text, Button, TextField } from '@radix-ui/themes';
import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import AuthLayout from '@/components/AuthLayout/AuthLayout';

const Convidados: React.FC = () => {
  return (
    <AuthLayout>
      <Flex height='100%' direction='column' p='8' gap='8'>
        <Text size='8' weight='regular' className={junge.className}>
          Convidados
        </Text>
        <Flex direction='column' className={poppins.className} gap='4'>
          <Flex width='100%' justify='between'>
            <Box style={{ maxWidth: '25rem' }} width='100%'>
              <TextField.Root size='3' variant='surface'>
                <TextField.Slot>
                  <MagnifyingGlass height='16' width='16' />
                </TextField.Slot>
                <TextField.Input placeholder='Buscar Convidados' />
              </TextField.Root>
            </Box>
            <Box>
              <Button size='3'>Adicionar Convidado</Button>
            </Box>
          </Flex>
          <Box
            style={{
              background: 'var(--gray-a2)',
              borderRadius: 'var(--radius-3)',
            }}
          >
            <DataTable />
          </Box>
        </Flex>
      </Flex>
    </AuthLayout>
  );
};

export default Convidados;
