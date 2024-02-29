import TextInput from '@/components/form/TextInput';
import { Button, Heading, VStack, useToast } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Lock, EnvelopeSimple } from '@phosphor-icons/react';
import { useAuth } from '@/providers/Auth';
import { useRouter } from 'next/router';
import { ScaleLoader } from 'react-spinners';
import { junge } from '@/assets/fonts';

const Login: React.FC = () => {
  const toast = useToast();

  const router = useRouter();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await signIn(data.email, data.password);

      router.push('/admin/meucasamento/convidados');
    } catch (error) {
      toast({
        description: 'Erro ao realizar login',
        status: 'error',
      });
    }
  };

  return (
    <VStack alignItems='center' justifyContent='center' height='100dvh'>
      <VStack gap={8}>
        <Heading style={junge.style}>Meu Casamento - Login</Heading>

        <VStack
          width='lg'
          gap={8}
          borderWidth={1}
          padding={8}
          borderRadius='lg'
        >
          <VStack width='full' gap={4}>
            <TextInput
              control={control}
              name='email'
              label='E-mail'
              icon={<EnvelopeSimple />}
              size='lg'
            />
            <TextInput
              control={control}
              name='password'
              label='Senha'
              isPassword
              icon={<Lock />}
              size='lg'
            />
          </VStack>
          <Button
            onClick={handleSubmit(onSubmit)}
            width='full'
            colorScheme='green'
            size='lg'
          >
            {isSubmitting ? <ScaleLoader /> : 'Login'}
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Login;
