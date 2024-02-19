import { Flex, TextField, Text, IconButton } from '@radix-ui/themes';
import React, { ReactNode, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Eye, EyeClosed } from '@phosphor-icons/react';

type IInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  icon?: ReactNode;
  isPassword?: boolean;
};

const TextInput = <T extends FieldValues>({
  control,
  name,
  label,
  icon,
  isPassword,
}: IInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const { field } = useController({
    control,
    name,
  });

  const toggleShow = () => setShowPassword((old) => !old);

  return (
    <Flex direction='column' width='100%'>
      {label && (
        <Text as='label' htmlFor={name}>
          {label}
        </Text>
      )}
      <TextField.Root>
        {icon && <TextField.Slot>{icon}</TextField.Slot>}
        <TextField.Input
          size='3'
          type={isPassword && !showPassword ? 'password' : 'text'}
          {...field}
        />

        {isPassword && (
          <TextField.Slot>
            <IconButton onClick={toggleShow}>
              {showPassword ? <Eye /> : <EyeClosed />}
            </IconButton>
          </TextField.Slot>
        )}
      </TextField.Root>
    </Flex>
  );
};

export default TextInput;
