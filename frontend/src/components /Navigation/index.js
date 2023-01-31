import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

//mantine
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Menu,
  Button,
  Transition,
  Paper,
  List,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const HEADER_HEIGHT = 60;
const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(
    (state: RootStateOrAny) => state.session.user
  );
  const credential = 'Demo';
  const password = 'password';

  let sessionLinks: JSX.Element;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <Button
          variant='gradient'
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
          onClick={() =>
            dispatch(sessionActions.login({ credential, password }))
          }
        >
          Demo User
        </Button>
      </>
    );
  }

  //mantine
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  return (
    <div>
      <Header height={60} mb={5}>
        <Container className={classes.header}>
          <NavLink id='home-link' exact to='/'>
            <Button
              variant='gradient'
              gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
            >
              FairBnB
            </Button>
          </NavLink>

          <Group spacing={5} className={classes.links}>
            {sessionLinks}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size='sm'
          />

          <Transition
            transition='pop-top-right'
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {sessionLinks}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </div>
  );
}

export default Navigation;
