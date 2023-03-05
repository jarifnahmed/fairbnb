import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from '../LoginFormModal/LoginForm';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Link,
  Center
} from '@chakra-ui/react'

function SignupFormModal() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showLogIn, setShowLogIn] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(true);
  const handleClick = () => {
    setShowSignUp(!showSignUp)
    setShowLogIn(!showLogIn)
  };

  const resetStates = () => {
    setShowLogIn(false);
    setShowSignUp(true);
  }

  return (
    <>
      <Button rounded={'full'} onClick={onOpen}>Sign Up</Button>
      <Modal isOpen={isOpen} onClose={() => { onClose(); resetStates() }} isCentered>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(20px)' />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb="3rem">
            {showLogIn ? (
              <>
                <LoginForm />
                <Center>
                  <Link color='pink.500' onClick={handleClick}>Click Here To Sign Up</Link>
                </Center>
              </>
            ) : false}
            {showSignUp ? (
              <>
                <SignupForm />
                <Center>
                  <Link color='pink.500' onClick={handleClick}>Click Here To Log In</Link>
                </Center>
              </>
            ) : false}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignupFormModal;
