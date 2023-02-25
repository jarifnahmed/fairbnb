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
  IconButton,
  HStack,
  useDisclosure,
  Stack,
  Text,
  Spacer,
  Grid,
  useBreakpointValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';


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

  const { isOpen } = useDisclosure();


  const marginRight = useBreakpointValue({ base: "1rem", md: "5rem" });
  const marginLeft = useBreakpointValue({ base: "1rem", md: "5rem" });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex h={16} w='100%' alignItems={'center'} justifyContent={'space-between'}>
        <Flex h={16} w='100%' alignItems={'center'} justifyContent={'space-between'}>

          <Box ml={marginLeft}>
            <NavLink exact to='/'>
              <Text
                color="white"
                fontSize="4xl"
                textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
              >
                <Text as="span" fontWeight="bold" color="pink.300">fair</Text>bnb
              </Text>
            </NavLink>
          </Box>

          {sessionUser ? null : (
            <>
              {isMobile && (
                <Box mr={marginRight}>
                  <Flex alignItems={'center'}>
                    <Menu>
                      <MenuButton as={Button} colorScheme='pink'><HamburgerIcon /></MenuButton>
                      <MenuList p="0">
                        <Flex flexDirection="column">
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
                        </Flex>
                      </MenuList>
                    </Menu>
                  </Flex>
                </Box>
              )}
            </>
          )}

        </Flex>

        <Box mr={marginRight} display={{ base: 'none', md: 'block' }}>
          {sessionUser ? null :
            <Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                <LoginFormModal />
                <SignupFormModal />
                <Button
                  rounded={'full'}
                  id='demo-btn'
                  colorScheme='pink'
                  onClick={() =>
                    dispatch(sessionActions.login({ credential, password }))
                  }
                >
                  Demo User Login
                </Button>
              </HStack>
            </Box>
          }
        </Box>
        {
          sessionUser &&
          <Box mr={marginRight}>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton rounded={'full'} as={Button} rightIcon={' '} colorScheme='pink'>{sessionUser.name}{<ChevronDownIcon />}</MenuButton>
                <MenuList>
                  {sessionUser && <MenuItem as='a' href='/user/listings'>My Listings</MenuItem>}
                  {sessionUser && <MenuItem as='a' href='/user/bookings'>My Bookings</MenuItem>}
                  {sessionUser && <MenuItem as='a' href='/listing/new'>Create Listing</MenuItem>}
                  <MenuDivider />
                  {sessionUser && <MenuItem onClick={logout} color='red' as='b'>Log Out</MenuItem>}
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        }

      </Flex>

      {
        isOpen && !sessionUser ? (
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
        ) : null
      }
    </>
  );
}

export default Navigation;
