import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
// import './SignupForm.css';

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

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ name, email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(['Confirm Password field must match Password field']);
  };

  return (
    <form className='cred-form' onSubmit={handleSubmit}>
      <Container fluid >
        <Title
          align='center'
          sx={(theme) => ({
            fontFamily: `Roboto, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Register Your Account
        </Title>
        <Paper>
          <ul className='cred-errors'>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <TextInput
            label='Name'
            placeholder='Name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextInput
            label='Email'
            placeholder='example@test.com'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            label='Username'
            placeholder='Username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <PasswordInput
            label='Confirm your password'
            placeholder='Confirm your password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            mt='md'
          />
          <Button fullWidth mt='xl' type='submit'>
            Sign Up
          </Button>
        </Paper>
      </Container>
    </form>
  );
}

export default SignupForm;
