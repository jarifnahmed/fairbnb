import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
// import './LoginForm.css';

//mantine
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
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
    <form className='cred-form' onSubmit={handleSubmit}>
      <Container>
        <Title
          align='center'
          sx={(theme) => ({
            fontFamily: `Roboto, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
         Log Into Your Account
        </Title>
        <Paper>
          <ul className='cred-errors'>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <TextInput
            label='Username or Email'
            placeholder='example@test.com'
            type='text'
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <PasswordInput
            label='Password'
            placeholder='Your password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            mt='md'
          />
          <Button fullWidth mt='xl' type='submit'>
            Sign in
          </Button>
        </Paper>
      </Container>
    </form>
  );
}

export default LoginForm;
