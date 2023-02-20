
import React from 'react';
import HomeFeed from '../HomeFeed';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import { Box, Image, Portal, Center, Text } from '@chakra-ui/react'
import homepageImage from '../../images/homepage_main.webp'

import Navigation from '../Navigation/index';

function Homepage() {
  const sessionUser = useSelector(state => state.session.user);

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
            h="500px"
            w="95%"
            position="relative"
            borderRadius={20}
          >
            <Navigation />
            <Text
              color="white"
              fontSize="4xl"
              position="absolute"
              bottom="20px"
              left="20px"
              textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
            >
              Affordable Places Without Compromise
            </Text>
          </Box>
        </Center>
      </>

    );
  }
}

export default Homepage;
