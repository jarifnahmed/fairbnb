import React, { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Log In</Button>
      <Modal centered opened={opened} onClose={() => setOpened(false)}>
        <LoginForm />
      </Modal>
    </>
  );
}

export default LoginFormModal;
