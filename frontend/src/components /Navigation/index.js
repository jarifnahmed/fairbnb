import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  IconButton,
  HStack,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon} from '@chakra-ui/icons';


function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const credential = 'Demo';
  const password = 'password';

  const history = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history('/');
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><NavLink exact to='/'>FairBnB</NavLink></Box>

          {sessionUser ? null :
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />}

          {sessionUser ? null :
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <LoginFormModal />
              <SignupFormModal />
              <Button
                id='demo-btn'
                colorScheme='pink'
                onClick={() =>
                  dispatch(sessionActions.login({ credential, password }))
                }
              >
                Demo User Login
              </Button>
            </HStack>
          }

          {sessionUser ?
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='pink'>{sessionUser.name}</MenuButton>
                <MenuList >
                  {sessionUser ? <MenuItem as='a' href='/user/listings'>My Listings</MenuItem> : false}
                  {sessionUser ? <MenuItem as='a' href='/user/bookings'>My Bookings</MenuItem> : false}
                  {sessionUser ? <MenuItem as='a' href='/listing/new'>Create Listing</MenuItem> : false}
                  <MenuDivider />
                  {sessionUser ? <MenuItem onClick={logout} color='red' as='b'>Log Out</MenuItem> : false}
                </MenuList>
              </Menu>
            </Flex> : false}

        </Flex>

        {isOpen && !sessionUser ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <LoginFormModal />
              <SignupFormModal />
              <Button
                id='demo-btn'
                colorScheme='pink'
                onClick={() =>
                  dispatch(sessionActions.login({ credential, password }))
                }
              >
                Demo User Login
              </Button>
            </Stack>
          </Box>
        ) : null}


      </Box>
    </>
  );
}

export default Navigation;
