
import React from 'react';
import HomeFeed from '../HomeFeed';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import LoginForm from '../LoginFormModal/LoginForm';
import SignupForm from '../SignupFormModal/SignupForm';

import {
  Box,
  Image,
  Portal,
  Center,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Link,
} from '@chakra-ui/react'

import Navigation from '../Navigation/index';

function Homepage() {
  const sessionUser = useSelector(state => state.session.user);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogIn, setShowLogIn] = React.useState(true);
  const [showSignUp, setShowSignUp] = React.useState(false);
  const handleClick = () => {
    setShowSignUp(!showSignUp)
    setShowLogIn(!showLogIn)
  };

  const resetStates = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  }

  const AuthModal = () => {
    return (
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
    )
  }

  if (sessionUser) {
    return (
      <Navigate to='/user/dashboard' />
    )
  } else {
    return (
      <>
        <Box className='whiteSpace' bg='white' p={4}></Box>
        <Center>
          <Box
            display="flex"
            justifyContent="center"
            bg="url('https://images.pexels.com/photos/2692254/pexels-photo-2692254.jpeg')"
            bgSize="cover"
            bgPosition="center"
            height={{ base: "300px", md: "500px", lg: "600px" }}
            width={{ base: "95%", md: "80%", lg: "90%" }}
            position="relative"
            borderRadius={20}
          >
            <Navigation />
            <Text
              color="white"
              fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
              position="absolute"
              bottom="40%"
              left="50%"
              transform="translateX(-50%)"
              width={{ base: "80%", md: "50%", lg: "30%" }}
              textAlign="center"
              textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
            >
              Find Affordable Places To Enjoy Your Time
            </Text>
          </Box>
        </Center>

        <Box className='whiteSpace' bg='white' p={7}></Box>

        <Center>
          <Box
            justifyContent="center"
            bg="url('https://images.pexels.com/photos/5352324/pexels-photo-5352324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
            bgSize="cover"
            bgPosition="center"
            height={{ base: "300px", md: "500px", lg: "500px" }}
            width={{ base: "30%", md: "30%", lg: "30%" }}
            position="relative"
            borderRadius={20}
            _hover={{
              cursor: 'pointer',
              transform: 'translateY(-5px)',
              transition: 'all 0.2s ease-in-out'
            }}
            onClick={onOpen}
          >
            <AuthModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} showLogIn={showLogIn} showSignUp={showSignUp} handleClick={handleClick} resetStates={resetStates} />
            <Text
              color="white"
              fontSize={{ base: "4x1", md: "4xl", lg: "4xl" }}
              position="absolute"
              bottom="20px"
              left="20px"
              textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
            >
              Outdoor Getaways
            </Text>
          </Box>

          <Box className='whiteSpace' bg='white' p={2} display={{ base: 'flex', md: 'flex', lg: 'flex' }}></Box>

          <VStack
            spacing={4}
            align='stretch'
          >
            <Box
              bg="url('https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg')"
              bgSize="cover"
              bgPosition="center"
              height={{ base: "9rem", md: "240px", lg: "240px" }}
              width={{ base: "15rem", md: "22rem", lg: "50rem" }}
              position="relative"
              borderRadius={20}
              _hover={{
                cursor: 'pointer',
                transform: 'translateY(-5px)',
                transition: 'all 0.2s ease-in-out'
              }}
              onClick={onOpen}
            >
              <Text
                color="white"
                fontSize={{ base: "3x1", md: "4xl", lg: "4xl" }}
                position="absolute"
                bottom="20px"
                left="20px"
                textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
              >
                Urban Stays
              </Text>
            </Box>

            <Box
              bg="url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
              bgSize="cover"
              bgPosition="center"
              height={{ base: "9rem", md: "240px", lg: "240px" }}
              width={{ base: "15rem", md: "22rem", lg: "50rem" }}
              position="relative"
              borderRadius={20}
              _hover={{
                cursor: 'pointer',
                transform: 'translateY(-5px)',
                transition: 'all 0.2s ease-in-out'
              }}
              onClick={onOpen}
            >
              <Text
                color="white"
                fontSize={{ base: "3x1", md: "4xl", lg: "4xl" }}
                position="absolute"
                bottom="20px"
                left="20px"
                textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
              >
                Wonderful Experiences
              </Text>
            </Box>

          </VStack>

        </Center>

      </>

    );
  }
}

export default Homepage;
