import React from 'react';
import SignupForm from './SignupForm';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

function SignupFormModal() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button rounded={'full'} onClick={onOpen}>Sign Up</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(20px)' />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb="3rem">
            <SignupForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignupFormModal;
