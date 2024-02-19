import TextInput from '@/components/form/TextInput';
import { Button, Flex, Heading } from '@radix-ui/themes';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Lock, EnvelopeSimple } from '@phosphor-icons/react';
import { useAuth } from '@/providers/Auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { ScaleLoader } from 'react-spinners';

const Login: React.FC = () => {
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
      console.log(data);
      await signIn(data.email, data.password);

      toast.success('Logado com Sucesso');

      router.push('/admin/meucasamento/convidados');
    } catch (error) {
      toast.error('Erro ao realizar login');
    }
  };

  return (
    <Flex
      direction='column'
      style={{ width: '100dvw', height: '100dvh' }}
      align='center'
      justify='center'
    >
      <Flex direction='column' gap='4'>
        <Heading>Meu Casamento - Login</Heading>

        <Flex
          direction='column'
          p='4'
          justify='between'
          gap='8'
          style={{
            width: '30rem',
            border: '1px solid gray',
            borderRadius: '0.5rem',
          }}
        >
          <Flex direction='column' width='100%' gap='4'>
            <TextInput
              control={control}
              name='email'
              label='E-mail'
              icon={<EnvelopeSimple />}
            />
            <TextInput
              control={control}
              name='password'
              label='Senha'
              isPassword
              icon={<Lock />}
            />
          </Flex>
          <Button onClick={handleSubmit(onSubmit)} size='3'>
            {isSubmitting ? <ScaleLoader /> : 'Login'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
