import React from 'react';
import { Table, Tbody, Tr, Th, Td, Thead, Box } from '@chakra-ui/react';

const DataTable: React.FC = () => {
  return (
    <Box borderWidth={1} borderRadius='lg' height='full'>
      <Table variant='simple' height='full'>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Familia</Th>
            <Th>Mesa</Th>
            <Th>Confirmação</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Elzimare Oliveira</Td>
            <Td>Noivo</Td>
            <Td>Pais</Td>
            <Td>Sim</Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
