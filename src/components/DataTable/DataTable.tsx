import React from 'react';
import { Table } from '@radix-ui/themes';

// import { Container } from './styles';

const DataTable: React.FC = () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Familia</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Mesa</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Confirmação</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Açōes</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Elzimare Oliveira</Table.RowHeaderCell>
          <Table.Cell>Noivo</Table.Cell>
          <Table.Cell>Pais</Table.Cell>
          <Table.Cell>Sim</Table.Cell>
          <Table.RowHeaderCell></Table.RowHeaderCell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default DataTable;
