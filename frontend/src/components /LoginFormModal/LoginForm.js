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
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
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
