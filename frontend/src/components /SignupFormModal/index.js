import React, { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Sign Up</Button>
      <Modal centered opened={opened} onClose={() => setOpened(false)}>
        <SignupForm />
      </Modal>
    </>
  );
}

export default SignupFormModal;
