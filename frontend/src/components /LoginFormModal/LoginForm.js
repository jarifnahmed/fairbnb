import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <Box
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'white')}>
        <Stack maxW={'lg'} pt={9} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log In</Heading>
          </Stack>
          <Box>
            <form className="cred-form" onSubmit={handleSubmit}>
              <ul className="cred-errors">
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
              <Stack spacing={4}>
                <FormControl id="text" isRequired>
                  <FormLabel>Username or Email</FormLabel>
                  <Input type="text" value={credential} onChange={(e) => setCredential(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size='md'>
                    <Input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={'pink.400'}
                    color={'white'}
                    _hover={{
                      bg: 'pink.500',
                    }}
                  >
                    Log in
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default LoginForm;
