import React from 'react';
import LoginForm from './LoginForm';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

function LoginFormModal() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Log In</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(20px)' />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb="3rem">
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginFormModal;
