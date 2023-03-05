import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './SignupForm.css';

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

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ name, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must match Password field']);
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
            <Heading fontSize={'4xl'}>Sign Up</Heading>
          </Stack>
          <Box>
            <form className="cred-form" onSubmit={handleSubmit}>
              <ul className="cred-errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input rounded={'full'} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input rounded={'full'} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input rounded={'full'} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size='md'>
                    <Input rounded={'full'} type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='4.5rem'>
                      <Button rounded={'full'} h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size='md'>
                    <Input rounded={'full'} type={show ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <InputRightElement width='4.5rem'>
                      <Button rounded={'full'} h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    rounded={'full'}
                    type="submit"
                    bg={'pink.400'}
                    color={'white'}
                    _hover={{
                      bg: 'pink.500',
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box >
    </>
  );
}

export default SignupForm;
