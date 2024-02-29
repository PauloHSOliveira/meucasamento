import Select from '@/components/form/Select';
import TextInput from '@/components/form/TextInput';
import { VStack } from '@chakra-ui/react';
import React from 'react';
import { Control } from 'react-hook-form';

interface InviteFormTypes {
  control: Control<any>;
}

const InviteForm: React.FC<InviteFormTypes> = ({ control }) => {
  return (
    <VStack gap={4}>
      <TextInput
        control={control}
        name='name'
        label='Nome Completo'
        placeholder='Nome Completo'
        size='lg'
      />
      <Select
        size='lg'
        label='Familia'
        control={control}
        name='family'
        options={[]}
      />
      <Select
        size='lg'
        label='Mesa'
        control={control}
        name='table'
        options={[]}
      />
    </VStack>
  );
};

export default InviteForm;
