import { junge, poppins } from '@/assets/fonts';
import DataTable from '@/components/DataTable/DataTable';
import {
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import AuthLayout from '@/components/AuthLayout/AuthLayout';
import ModalComponent from '@/components/ModalComponent/ModalComponent';
import InviteForm from '@/modules/invites/components/forms/InviteForm';
import { useForm } from 'react-hook-form';
import { createColumnHelper } from '@tanstack/react-table';

type Invite = {
  name: string;
  family: string;
};

const invitesColumnHelpers = createColumnHelper<Invite>();

const columns = [
  invitesColumnHelpers.accessor('family', {
    header: 'Nome',
    cell: (info) => info.getValue(),
  }),
  invitesColumnHelpers.accessor('family', {
    header: 'Familia',
    cell: (info) => info.getValue(),
  }),
];

const Familias: React.FC = () => {
  const addInvitedModal = useDisclosure();

  const { control } = useForm();

  return (
    <>
      <AuthLayout title='Familias' activeRoute='families'>
        <VStack width='full' className={poppins.className} gap={4}>
          <HStack width='100%' justifyContent='space-between'>
            <Box width='100%'>
              {/* <TextField.Root size='3' variant='surface'>
                <TextField.Slot>
                  <MagnifyingGlass height='16' width='16' />
                </TextField.Slot>
                <TextField.Input placeholder='Buscar Convidados' />
              </TextField.Root> */}
            </Box>
            <Box>
              <Button colorScheme='green' onClick={addInvitedModal.onOpen}>
                Adicionar Familia
              </Button>
            </Box>
          </HStack>
          <Box width='full'>
            <DataTable columns={columns} data={[]} />
          </Box>
        </VStack>
      </AuthLayout>
      <ModalComponent
        {...addInvitedModal}
        modalTitle={
          <Box p={4}>
            <Heading fontSize='3xl' style={junge.style}>
              Adicionar Convidado
            </Heading>
          </Box>
        }
        modalBody={<InviteForm control={control} />}
        modalFooter={
          <HStack>
            <Button
              variant='outline'
              colorScheme='purple'
              onClick={addInvitedModal.onClose}
            >
              Cancelar
            </Button>
            <Button colorScheme='green'>Adicionar</Button>
          </HStack>
        }
        size='xl'
      />
    </>
  );
};

export default Familias;
