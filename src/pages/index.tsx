import { Flex, Text, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex direction='column' gap='2'>
      <Text>Hello from Radix Themes :)</Text>
      <Button>{"Let's go"}</Button>
    </Flex>
  );
}
