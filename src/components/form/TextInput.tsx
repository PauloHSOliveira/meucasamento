import {
  Flex,
  Text,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Eye, EyeClosed } from '@phosphor-icons/react';

type IInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  icon?: ReactNode;
  isPassword?: boolean;
} & InputProps;

const TextInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  icon,
  isPassword,
  ...rest
}: IInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const { field } = useController({
    control,
    name,
  });

  const toggleShow = () => setShowPassword((old) => !old);

  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        {icon && <InputLeftElement height='full'>{icon}</InputLeftElement>}
        <Input
          type={isPassword && !showPassword ? 'password' : 'text'}
          {...field}
          {...rest}
        />

        {isPassword && (
          <InputRightElement height='full'>
            <IconButton
              onClick={toggleShow}
              aria-label='Toggle Password Visibility'
              height='full'
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </IconButton>
          </InputRightElement>
        )}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default TextInput;
