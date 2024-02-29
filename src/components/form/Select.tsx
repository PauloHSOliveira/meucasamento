import React from 'react';
import {
  Select as ChakraSelect,
  FormControl,
  FormLabel,
  SelectProps,
} from '@chakra-ui/react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

type Options = {
  value: string;
  label: string;
};

type SelectComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  options: Options[];
} & SelectProps;

const Select = <T extends FieldValues>({
  control,
  name,
  options,
  label,
  ...rest
}: SelectComponentProps<T>) => {
  const { field } = useController<T>({
    control,
    name,
  });

  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraSelect {...field} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </FormControl>
  );
};

export default Select;
